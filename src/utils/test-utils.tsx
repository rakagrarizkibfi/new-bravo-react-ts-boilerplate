/* eslint-disable @typescript-eslint/no-empty-function */
import { render, RenderOptions } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

const jestMocks = () => {}

const intersectionObserver = () => {
  const observe = jest.fn()
  const unobserve = jest.fn()
  const disconnect = jest.fn()
  const IntersectionObserver: any = jest.fn(() => ({
    observe,
    unobserve,
    disconnect,
  }))
  window['IntersectionObserver'] = IntersectionObserver
}

jestMocks()
beforeEach(() => {
  intersectionObserver()
})

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
    </>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render, intersectionObserver, jestMocks }
