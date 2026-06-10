// Expose React + ReactDOM as globals so the prototype modules — which reference
// `React` and `ReactDOM` without importing them (UMD/CDN style) — resolve
// against the bundled npm builds instead of the old unpkg <script> tags.
// Imported first in main.jsx so these run before any module that reads them.
import React from 'react';
import { createRoot } from 'react-dom/client';

window.React = React;
window.ReactDOM = { createRoot };
