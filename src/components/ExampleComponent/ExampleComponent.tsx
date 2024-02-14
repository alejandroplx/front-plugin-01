import React from 'react';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to front-plugin-01!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plexus front plugin example 01">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
    <iframe
     title="port"
     src="https://www.plexus.es"
     style={{
       border: 'none',
       height: '100vh',
       width: '100%',
       resize: 'both',
       overflow: 'auto',
     }}
   />
</Content>
  </Page>
);
