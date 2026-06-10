// Single bundle entry. Order matters: globals.js installs window.React first,
// then each prototype module attaches its components to `window` in the same
// sequence the old public/index.html loaded them. app.jsx mounts the app last.
import './globals.js';

import './styles.css';
import './layout.css';
import './register.css';

import './tweaks-panel.jsx';
import './data.jsx';
import './shared.jsx';
import './home.jsx';
import './pages.jsx';
import './register.jsx';
import './app.jsx';
