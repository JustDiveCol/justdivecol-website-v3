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

const safeUnmountRoot = (root: Root) => {
  queueMicrotask(() => {
    try {
      root.unmount();
    } catch {
      // no-op
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
  initialCenter,
  initialZoom,
  minZoom,
  maxZoom,
}: DiveSiteMapProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);
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
  const { t } = useTranslation([translationNS, 'dive-sites', 'common']);
  const hoverPopup = useRef<Popup | null>(null);

  // Efecto de inicialización del mapa
  useEffect(() => {
    if (mapInstance.current || !mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/ocean/style.json?key=${MAPTILER_API_KEY}`,
      center: initialCenter || [-74.2973, 4.5709],
      zoom: initialZoom || 4.5,
      minZoom: minZoom || 2,
      maxZoom: maxZoom || 20,
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
      Object.values(markersRef.current).forEach(
        ({ root, marker, el, enter, leave, click }) => {
          el.removeEventListener('click', click);
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
          safeUnmountRoot(root);
          marker.remove();
        }
      );
      markersRef.current = {};
      hoverPopup.current?.remove();
      hoverPopup.current = null;
      map.remove();
      mapInstance.current = null;
    };
  }, [initialCenter, initialZoom, minZoom, maxZoom]);

  // Efecto para crear y actualizar los marcadores
  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    const currentMarkerIds = Object.keys(markersRef.current);
    const newSiteIds = sites.map((s) => s.id);

    // Eliminar marcadores que ya no están en la lista de sitios
    currentMarkerIds.forEach((id) => {
      if (!newSiteIds.includes(id)) {
        const { root, marker, el, enter, leave, click } =
          markersRef.current[id];
        el.removeEventListener('click', click);
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        safeUnmountRoot(root);
        marker.remove();
        delete markersRef.current[id];
      }
    });

    // Añadir nuevos marcadores
    sites.forEach((site) => {
      if (markersRef.current[site.id]) return;

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
    });
  }, [sites, onSelect, onHover, t, translationNS]);

  // Efecto para renderizar el estado de los marcadores (hover/selected)
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

  // Efecto para ajustar la vista del mapa
  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    if (focusedSite) {
      map.flyTo({
        center: focusedSite.coordinates,
        zoom: Math.max(13, minZoom || 13),
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
          maxZoom: maxZoom ? Math.min(14, maxZoom) : 14,
        });
      }
    }
  }, [focusedSite, sites, minZoom, maxZoom]);

  return (
    <div
      ref={mapContainer}
      className='w-full h-full'
    />
  );
};
