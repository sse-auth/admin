import React from 'react';
import PageTitle from './PageTitle';
import Layout from '../layout';

interface DynamicPageRendererProps {
  Component: React.ComponentType;
  title: string;
}

export const FormatL: React.FC<DynamicPageRendererProps> = ({
  title,
  Component,
}) => {
  return (
    <>
      <Layout>
        <PageTitle title={title} />
        <Component />
      </Layout>
    </>
  );
};

export const Format: React.FC<DynamicPageRendererProps> = ({
  title,
  Component,
}) => {
  return (
    <>
      <PageTitle title={title} />
      <Component />
    </>
  );
};
