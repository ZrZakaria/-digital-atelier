import { lazy, Suspense } from 'react';

// Lazy-load the Three.js installation to keep initial bundle small
// (adds ~270KB gzipped)
const ThreeHeroInstallation = lazy(() => import('./ThreeHeroInstallation'));

export { ThreeHeroInstallation };
