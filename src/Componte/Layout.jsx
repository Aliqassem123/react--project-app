
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'

import End from './End'

export default function Layout() {
  return (
    <>
    <div><Navbar></Navbar></div>

<Outlet></Outlet>

    <div><End></End></div>
    </>
)
}
