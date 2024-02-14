import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { frontPlugin01Plugin, FrontPlugin01Page } from '../src/plugin';

createDevApp()
  .registerPlugin(frontPlugin01Plugin)
  .addPage({
    element: <FrontPlugin01Page />,
    title: 'Root Page',
    path: '/front-plugin-01'
  })
  .render();
