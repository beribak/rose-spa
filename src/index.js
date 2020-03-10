import './styles.css';
import './bio.css';
import './banner.css';
import './navbar.css';
import './services.css';
import './info.css';
import './footer.css';
import mapboxgl from 'mapbox-gl';


let longitude = 0;
let latitude = 0;

const displayMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGFua28xOTkwIiwiYSI6ImNqeWszNmdueDA5ZmMzZHE0cnhrdHkwMmUifQ.2JTPShL3KIjvqvYMKWUL3w';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [longitude, latitude],
    zoom: 14
  });

  new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
};

const getCoordinates = (address) => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/4622&Van&Nuys.json?access_token=pk.eyJ1IjoiZGFua28xOTkwIiwiYSI6ImNqeWszNmdueDA5ZmMzZHE0cnhrdHkwMmUifQ.2JTPShL3KIjvqvYMKWUL3w`)
    .then(response => response.json())
    .then((data) => {
      longitude = data.features[0].center[0];
      latitude = data.features[0].center[1];
      displayMap();
    });
};

getCoordinates();