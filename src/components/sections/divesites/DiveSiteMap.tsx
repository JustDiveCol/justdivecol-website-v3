// src/components/sections/divesites/DiveSiteMap.tsx
import { useRef, useEffect } from 'react';
import maplibregl, { Marker, LngLatBounds, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import { useTranslation } from 'react-i18next';

import { MotionMarker } from './MotionMarker';
import { FlagIcon, ReefIcon, WreckIcon, WallIcon } from '../../ui';
import type { DiveSiteMapProps, IconComponentType } from './types';
import type { DiveTypeId } from '../../../constants';

const MAPTILER_API_KEY = '97B6xeRDLNUfHdzle616';

const getIconComponent = (typeIds: DiveTypeId[] = []): IconComponentType => {
  const primaryType = typeIds[0];
  switch (primaryType) {
    case 'reef':
      return ReefIcon;
    case 'wreck':
      return WreckIcon;
    case 'wall':
      return WallIcon;
    default:
      return FlagIcon;
  }
};

// Desmonta un ReactRoot fuera del frame de render actual para evitar el warning.
const safeUnmountRoot = (root: Root) => {
  // queueMicrotask es preferible a setTimeout(0) para que ocurra justo después del commit.
  queueMicrotask(() => {
    try {
      root.unmount();
    } catch {
      // no-op: en dev/strict pueden pasar dobles invocaciones
    }
  });
};

export const DiveSiteMap = ({
  sites,
  hoveredSiteId,
  focusedSite,
  onSelect,
  onHover,
  translationNS,
}: DiveSiteMapProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);

  // Guarda marker + React root + icono + listeners
  const markersRef = useRef<
    Record<
      string,
      {
        marker: Marker;
        root: Root;
        IconComponent: IconComponentType;
        el: HTMLDivElement;
        enter: () => void;
        leave: () => void;
        click: () => void;
      }
    >
  >({});

  const { t } = useTranslation([translationNS, 'common']);
  const hoverPopup = useRef<Popup | null>(null);

  // Init / teardown del mapa
  useEffect(() => {
    if (mapInstance.current || !mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/ocean/style.json?key=${MAPTILER_API_KEY}`,
      center: [-74.2973, 4.5709],
      zoom: 4.5,
    });
    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    hoverPopup.current = new Popup({
      closeButton: false,
      closeOnClick: false,
      anchor: 'bottom',
      className: 'map-popup',
    });

    mapInstance.current = map;

    return () => {
      // Limpieza completa al desmontar el mapa
      Object.values(markersRef.current).forEach(
        ({ root, marker, el, enter, leave, click }) => {
          el.removeEventListener('click', click);
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
          safeUnmountRoot(root); // ← defer
          marker.remove();
        }
      );
      markersRef.current = {};
      hoverPopup.current?.remove();
      hoverPopup.current = null;

      map.remove();
      mapInstance.current = null;
    };
  }, []);

  // Crear / actualizar marcadores cuando cambian los sitios
  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    // Importante: NO limpiar marcadores aquí. El cleanup del efecto anterior se ejecuta primero.
    const createdIds: string[] = [];

    sites.forEach((site) => {
      const el = document.createElement('div');
      const root = createRoot(el);
      const IconComponent = getIconComponent(site.typeIds ?? []);

      const marker = new Marker({ element: el, anchor: 'center' })
        .setLngLat(site.coordinates)
        .addTo(map);

      const click = () => onSelect?.(site.id);
      const enter = () => {
        onHover?.(site.id);
        map.getCanvas().style.cursor = 'pointer';
        hoverPopup.current
          ?.setLngLat(site.coordinates)
          .setHTML(`<strong>${t(site.nameKey, { ns: translationNS })}</strong>`)
          .addTo(map);
      };
      const leave = () => {
        onHover?.(null);
        map.getCanvas().style.cursor = '';
        hoverPopup.current?.remove();
      };

      el.addEventListener('click', click);
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);

      markersRef.current[site.id] = {
        marker,
        root,
        IconComponent,
        el,
        enter,
        leave,
        click,
      };
      createdIds.push(site.id);
    });

    // Cleanup SOLO de lo creado en este pase (defer unmount)
    return () => {
      createdIds.forEach((id) => {
        const rec = markersRef.current[id];
        if (!rec) return;
        const { root, marker, el, enter, leave, click } = rec;
        el.removeEventListener('click', click);
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        safeUnmountRoot(root); // ← defer
        marker.remove();
        delete markersRef.current[id];
      });
    };
  }, [sites, onSelect, onHover, t, translationNS]);

  // Render del MotionMarker (selected/hover state)
  useEffect(() => {
    Object.entries(markersRef.current).forEach(
      ([id, { root, IconComponent }]) => {
        root.render(
          <MotionMarker
            IconComponent={IconComponent}
            isSelected={id === focusedSite?.id || id === hoveredSiteId}
          />
        );
      }
    );
  }, [focusedSite, hoveredSiteId, sites]);

  // Fit bounds / flyTo según focusedSite
  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    if (focusedSite) {
      map.flyTo({
        center: focusedSite.coordinates,
        zoom: 13,
        essential: true,
      });
      return;
    }

    if (sites.length > 0) {
      const bounds = new LngLatBounds();
      sites.forEach((s) => bounds.extend(s.coordinates));
      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, {
          padding: 80,
          duration: 1000,
          maxZoom: 14,
        });
      }
    }
  }, [focusedSite, sites]);

  return (
    <div
      ref={mapContainer}
      className='w-full h-full'
    />
  );
};
