import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const frontPlugin01Plugin = createPlugin({
  id: 'front-plugin-01',
  routes: {
    root: rootRouteRef,
  },
});

export const FrontPlugin01Page = frontPlugin01Plugin.provide(
  createRoutableExtension({
    name: 'FrontPlugin01Page',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
