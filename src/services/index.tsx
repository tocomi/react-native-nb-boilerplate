import React, { ReactNode } from 'react'
import { Api } from './api'
import { Nav } from './navigation'
import { OnStart } from './onStart'
import { Translate } from './translate'

const services = {
  t: new Translate(), // should be first
  nav: new Nav(),
  onStart: new OnStart(),
  api: new Api(),
}
type ContextServices = typeof services

const servicesContext = React.createContext<ContextServices>(services)
export const StoresProvider = ({ children }: { children: ReactNode }) => (
  <servicesContext.Provider value={services}>
    {children}
  </servicesContext.Provider>
)

export const useServices = (): ContextServices =>
  React.useContext(servicesContext)

export const initServices = async (): PVoid => {
  for (const key in services) {
    if (Object.prototype.hasOwnProperty.call(services, key)) {
      const s = (services as Services)[key]

      if (s.init) {
        await s.init()
      }
    }
  }
}
