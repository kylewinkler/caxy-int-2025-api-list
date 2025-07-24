import { ReactElement, ReactNode } from "react"
import Home from "../pages/Home/Home"
import About from "../pages/About/about"

export interface RouteI {
  page: ReactNode
  url: string
  label?: string
}

export const routes = [
  {
    url: '/',
    label: 'Home',
    page: <Home />
  },
  {
    url: '/about',
    label: 'About',
    page: <About />
  },
]