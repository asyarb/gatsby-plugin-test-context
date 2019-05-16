import React from 'react'
import { PluginContextProvider } from './context/PluginContext'

export const wrapRootElement = ({ element }) => (
  <PluginContextProvider>{element}</PluginContextProvider>
)
