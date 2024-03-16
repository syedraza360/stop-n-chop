import mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef } from 'react'

const Map = ({ viewport, geolocateControlStyle }) => {
  const mapToken = process.env.REACT_APP_MAPBOX_TOKEN

  const geolocateControlRef = useRef(null)
  const mapContainerRef = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      mapboxApiAccessToken: mapToken,
      initialViewState: viewport,
      mapStyle: 'mapbox://styles/syed-danial110/cljc2s3wi004801o4htf27rve',
      style: {
        height: '90vh',
        padding: '20px',
      },
      container: mapContainerRef.current,
    })

    const geoLocate = new mapboxgl.GeolocateControl({
      style: geolocateControlStyle,
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      auto: false,
    })

    map.addControl(geoLocate)
    geolocateControlRef.current = map

    geoLocate.trigger()

    map.on('load', () => {
      geolocateControlRef.current.trigger()
      map.addSource('example-source', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [viewport.latitude, viewport.longitude], // Replace with desired marker coordinates
              },
              properties: {
                title: 'My Marker',
                description: 'This is a custom marker.',
              },
            },
          ],
        },
      })

      map.addLayer({
        id: 'example-layer',
        type: 'circle',
        source: 'example-source',
        paint: {
          'circle-radius': 6,
          'circle-color': '#0074D9',
        },
      })
    })

    map.on('geolocate', (e) => {
      const latitude = e.coords.latitude
      const longitude = e.coords.longitude
    })
    return () => map.remove()
  }, [])

  return (
    <div
      ref={mapContainerRef}
      style={{ width: '100%', height: '100vh', border: '1px solid black' }}
    ></div>
  )
}

export default Map
