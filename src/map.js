import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function initMap() {
  const map = L.map('map').setView([-33.4314, -70.6281], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([-33.4314, -70.6281])
    .addTo(map)
    .bindPopup('Ubicación del evento')
    .openPopup();
}
