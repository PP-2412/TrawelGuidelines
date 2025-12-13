'use client'

import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { EuropeCity } from './europeData'

interface SelectedCity {
  city: EuropeCity
  nights: number
}

interface EuropeMapProps {
  cities: EuropeCity[]
  selectedCities: SelectedCity[]
  onCityToggle: (city: EuropeCity) => void
  expanded?: boolean
}

// Custom marker icons
const createIcon = (color: string, isSelected: boolean, index?: number) => {
  const size = isSelected ? 32 : 24
  const iconHtml = isSelected && index !== undefined
    ? `<div style="
        background: ${color};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
        font-family: system-ui, -apple-system, sans-serif;
      ">${index + 1}</div>`
    : `<div style="
        background: ${color};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      "></div>`

  return L.divIcon({
    html: iconHtml,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  })
}

// Component to handle map bounds
function MapBoundsHandler({ selectedCities, allCities }: { selectedCities: SelectedCity[], allCities: EuropeCity[] }) {
  const map = useMap()

  useEffect(() => {
    if (selectedCities.length > 0) {
      const bounds = L.latLngBounds(
        selectedCities.map(sc => [sc.city.coordinates.lat, sc.city.coordinates.lng])
      )
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 6 })
    } else {
      // Default view of Europe
      map.setView([50, 10], 4)
    }
  }, [selectedCities, map])

  return null
}

export default function EuropeMap({ cities, selectedCities, onCityToggle, expanded = false }: EuropeMapProps) {
  // Create route line coordinates
  const routeCoordinates = useMemo(() => {
    return selectedCities.map(sc => [sc.city.coordinates.lat, sc.city.coordinates.lng] as [number, number])
  }, [selectedCities])

  // Check if a city is selected
  const isCitySelected = (cityId: string) => {
    return selectedCities.some(sc => sc.city.id === cityId)
  }

  // Get selected index for a city
  const getSelectedIndex = (cityId: string) => {
    return selectedCities.findIndex(sc => sc.city.id === cityId)
  }

  return (
    <MapContainer
      center={[50, 10]}
      zoom={4}
      className="w-full h-full [&_.leaflet-pane]:z-[1] [&_.leaflet-control]:z-[2]"
      style={{ background: '#e8e8e8' }}
      zoomControl={expanded}
      scrollWheelZoom={expanded}
      dragging={true}
      doubleClickZoom={expanded}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <MapBoundsHandler selectedCities={selectedCities} allCities={cities} />

      {/* Route line connecting selected cities */}
      {routeCoordinates.length > 1 && (
        <Polyline
          positions={routeCoordinates}
          color="#d19457"
          weight={3}
          opacity={0.8}
          dashArray="10, 10"
        />
      )}

      {/* City markers */}
      {cities.map((city) => {
        const selected = isCitySelected(city.id)
        const index = getSelectedIndex(city.id)
        const icon = createIcon(
          selected ? '#d19457' : '#44618b',
          selected,
          selected ? index : undefined
        )

        return (
          <Marker
            key={city.id}
            position={[city.coordinates.lat, city.coordinates.lng]}
            icon={icon}
            eventHandlers={{
              click: () => onCityToggle(city),
            }}
          >
            <Popup>
              <div className="min-w-[180px]">
                <div 
                  className="h-20 bg-cover bg-center rounded-t-lg -mx-3 -mt-3 mb-2"
                  style={{ backgroundImage: `url(${city.image})` }}
                />
                <h3 className="font-bold text-[#12103d] text-base mb-0.5">{city.name}</h3>
                <p className="text-[#44618b] text-xs mb-2">{city.country}</p>
                <p className="text-[#d19457] text-xs mb-2">{city.description}</p>
                <div className="text-[10px] text-[#44618b] mb-2">
                  Suggested: {city.suggestedNights} nights
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onCityToggle(city)
                  }}
                  className={`w-full py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selected
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-[#d19457] text-white hover:bg-[#c77e36]'
                  }`}
                >
                  {selected ? 'Remove from trip' : 'Add to trip'}
                </button>
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
