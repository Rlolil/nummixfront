import React from 'react'
import SidebarComp from '../../components/sidebar'
import SidebarMobile from '../../components/sidebarmobile'

function Sidebar() {
  return (
    <div>
        <SidebarMobile />
        <SidebarComp />
    </div>
  )
}

export default Sidebar