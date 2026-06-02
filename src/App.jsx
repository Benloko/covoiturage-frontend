import React, { Suspense, lazy } from 'react'
import * as ReactJSXRuntime from 'react/jsx-runtime'

if (!globalThis.__GLOBALS__) {
  globalThis.__GLOBALS__ = {}
}

globalThis.__GLOBALS__.React = React
globalThis.__GLOBALS__.ReactJSXRuntime = ReactJSXRuntime

const FigmaApp = lazy(async () => {
  const { Code0_8 } = await import('./figma-component.js')
  return Code0_8()
})

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            fontFamily: 'system-ui, sans-serif',
            color: '#374151',
          }}
        >
          Chargement...
        </div>
      }
    >
      <FigmaApp />
    </Suspense>
  )
}

export default App
