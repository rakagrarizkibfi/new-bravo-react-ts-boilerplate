/* eslint-disable @typescript-eslint/no-empty-function */
import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '~/context/auth/AuthProvider';

const viMocks = vi.fn();

const intersectionObserver = () => {
  const observe = vi.fn();
  const unobserve = vi.fn();
  const disconnect = vi.fn();
  const mockIntersectionObserver = vi.fn(() => ({
    observe,
    unobserve,
    disconnect,
    prototype: IntersectionObserver.prototype,
    root: null,
    rootMargin: '',
    thresholds: [],
    takeRecords: vi.fn(),
  }));
  window['IntersectionObserver'] = mockIntersectionObserver;
};

viMocks();
beforeEach(() => {
  intersectionObserver();
});

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    </>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, intersectionObserver, viMocks };
