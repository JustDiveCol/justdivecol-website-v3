// src/components/sections/divesites/DiveSiteMap.tsx
import React, { useRef, useEffect } from 'react';
import maplibregl, { Marker, LngLatBounds, Popup } from 'maplibre-gl';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import { useTranslation } from 'react-i18next';

import { MotionMarker } from './MotionMarker';
import { FlagIcon, ReefIcon, WreckIcon, WallIcon } from '../../ui/Icons';
import type { DiveSiteMapProps } from './types';
import type { DiveTypeId } from '../../../constants/dive-sites';

const MAPTILER_API_KEY = '97B6xeRDLNUfHdzle616';

const getIconComponent = (typeIds: DiveTypeId[] = []) => {
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
  const markersRef = useRef<{
    [key: string]: {
      marker: Marker;
      root: Root;
      IconComponent: React.ElementType;
    };
  }>({});
  const { t } = useTranslation([translationNS, 'common']);
  const hoverPopup = useRef(
    new Popup({
      closeButton: false,
      closeOnClick: false,
      anchor: 'bottom',
      className: 'map-popup',
    })
  );

  useEffect(() => {
    if (mapInstance.current || !mapContainer.current) return;
    mapInstance.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/ocean/style.json?key=${MAPTILER_API_KEY}`,
      center: [-74.2973, 4.5709],
      zoom: 4.5,
    });
    mapInstance.current.addControl(
      new maplibregl.NavigationControl(),
      'top-right'
    );
  }, []);

  useEffect(() => {
    if (!mapInstance.current) return;
    Object.values(markersRef.current).forEach(({ marker }) => marker.remove());
    markersRef.current = {};
    sites.forEach((site) => {
      const el = document.createElement('div');
      const root = createRoot(el);
      const IconComponent = getIconComponent(site.typeIds);
      const marker = new Marker({ element: el, anchor: 'center' })
        .setLngLat(site.coordinates)
        .addTo(mapInstance.current!);
      el.addEventListener('click', () => onSelect(site.id));
      el.addEventListener('mouseenter', () => {
        onHover(site.id);
        mapInstance.current!.getCanvas().style.cursor = 'pointer';
        hoverPopup.current
          .setLngLat(site.coordinates)
          .setHTML(`<strong>${t(site.nameKey)}</strong>`)
          .addTo(mapInstance.current!);
      });
      el.addEventListener('mouseleave', () => {
        onHover(null);
        mapInstance.current!.getCanvas().style.cursor = '';
        hoverPopup.current.remove();
      });
      markersRef.current[site.id] = { marker, root, IconComponent };
    });
  }, [sites, onSelect, onHover, t]);

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

  useEffect(() => {
    if (!mapInstance.current) return;
    if (focusedSite) {
      mapInstance.current.flyTo({
        center: focusedSite.coordinates,
        zoom: 13,
        essential: true,
      });
    } else if (sites.length > 0) {
      const bounds = new LngLatBounds();
      sites.forEach((site) => bounds.extend(site.coordinates));
      if (!bounds.isEmpty()) {
        mapInstance.current.fitBounds(bounds, {
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
