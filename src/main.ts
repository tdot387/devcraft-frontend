import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles/main.css';
import './assets/styles/hero.css';
import './assets/styles/header.css';
import './assets/styles/favoriteToggle.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { router } from './core/router.js';

// Make router globally available like `<button onclick="router.nav('/about')">`
(window as any).router = router;

router.init();
