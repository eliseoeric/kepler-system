// UI Package entry point
// Export all components and styles

// Components
export { default as NavbarWithSearch } from './components/Navbar/withSearch';
export { default as Button } from './components/Button';

// Styles - import to ensure they're included in the bundle
import './styles/index.css';
