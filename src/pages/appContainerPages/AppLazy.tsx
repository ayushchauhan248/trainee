import { lazy } from 'react'

const AppLazy = lazy(() => import('./AppRoute'))

export default AppLazy