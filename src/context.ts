import React from 'react'
import { InternalAPI } from './types'

export const Context = React.createContext<InternalAPI>({
  remove: () => {},
  update: () => {},
  handleClick: () => {},
})
