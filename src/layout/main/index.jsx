import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout