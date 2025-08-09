import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { initMap } from './map.js';
import { initForm } from './formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initForm();
});
