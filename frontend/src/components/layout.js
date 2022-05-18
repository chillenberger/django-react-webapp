import React from 'react'
import Menubar from './menu-bar'
import {Outlet} from 'react-router-dom'

function Layout() {
  return(
    <>
      <Menubar/>
      <Outlet/>
    </>
  )
}

export {Layout}
