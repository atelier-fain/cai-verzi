<template>
  <div class="map-container">
    <div id="map" class="map"></div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {IMGS_BASE_URL} from "/src/boot/axios.js";

// Props pentru a primi institutiile din component
const props = defineProps({
  institutii: {
    type: Array,
    default: () => [],
    required: true
  }
})

const map = ref(null)
const infowindow = ref(null)

const customMapStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }]
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'on' }]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#212121' }]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#eeeeee' }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#cccccc' }]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#333333' }, { weight: 1.5 }]
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#cccccc' }, { weight: 0.5 }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }]
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'on' }]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#e5e3df' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#cccccc' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#d9d9d9' }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#ffd966' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#e0b85c' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#e0e0e0' }]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#f2f2f2' }]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#e0e0e0' }]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#c9c9c9' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b3d9ff' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }]
  }
]

const customIcon = {
  url: `${IMGS_BASE_URL}/pin.svg`,
  scaledSize: new window.google.maps.Size(34, 53),
  anchor: new window.google.maps.Point(17, 53)
}

const initMap = () => {
  // Inițializez harta
  map.value = new window.google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.9432, lng: 24.9668},
    zoom: 6,
    styles: customMapStyle,
    mapTypeControl: false
  })

  infowindow.value = new window.google.maps.InfoWindow()

  // Creez bounds pentru auto-centrare
  const bounds = new window.google.maps.LatLngBounds()

  // Parcurg institutiile și adaug markere
  props.institutii.forEach((institutie) => {
    const position = {
      lat: parseFloat(institutie.latitudine),
      lng: parseFloat(institutie.longitudine)
    }

    const marker = new window.google.maps.Marker({
      position: position,
      map: map.value,
      title: institutie.nume,
      icon: customIcon
    })

    // Construiesc conținutul info window
    const infoContentParts = []

    if (institutie.nume) {
      infoContentParts.push(
        `<h3 style="margin:0;font-size: 18px;font-weight: 700;color: #00ac68;">${institutie.nume}</h3>`
      )
    }

    if (institutie.adresa) {
      infoContentParts.push(
        `<p style="margin: 10px 0 0 0;font-size: 14px;">${institutie.adresa}</p>`
      )
    }

    if (institutie.website) {
      infoContentParts.push(
        `<p style="margin: 5px 0 0 0;font-size: 14px;"><a style="color: #00ac68;" href="${institutie.website}" target="_blank">${institutie.website}</a></p>`
      )
    }

    const contentString = `
      <div style="font-family: 'Inter Tight', sans-serif;; max-width: 280px; padding-bottom: 5px;">
        ${infoContentParts.join('')}
      </div>
    `

    // Event listener pentru click pe marker - IMPORTANT
    marker.addListener('click', function () {
      // Inchid alt info window deschis
      infowindow.value.close()
      // Setez conținut și deschid
      infowindow.value.setContent(contentString)
      infowindow.value.open({
        anchor: marker,
        map: map.value,
        shouldFocus: false
      })
    })

    // Extind bounds cu fiecare marker
    bounds.extend(position)
  })

  // Ajustez automat centrul și zoom-ul să includă toate pin-urile
  if (props.institutii.length > 0) {
    map.value.fitBounds(bounds)
    // Adaug padding
    map.value.fitBounds(bounds, {top: 50, right: 50, bottom: 50, left: 50})
  }

  // Inchid info window la click pe hartă
  map.value.addListener('click', () => {
    infowindow.value.close()
  })
}

onMounted(() => {
  // Mă asigur că Google Maps este încărcat
  if (window.google && window.google.maps) {
    initMap()
  } else {
    console.error('Google Maps API nu este încărcat')
  }
})
</script>

<style lang="scss">
.map-container {
  width: 100%;
  max-width: 836px;
  height: 100%;
}

#map {
  width: 100%;
  height: 470px;
}

@media only screen and (max-width: 768px) {
  #map {
    height: 400px;
  }
}
</style>
