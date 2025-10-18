import React from 'react'
import Anbargrn from "../grn"
import Anbardn from "../dn"
import EmeliyyatNavbar from '../emeliyyatnavbar'
import { Outlet } from 'react-router'

const Anbaremeliyyat = () => {
  return (
    <div>
      <div className="mx-65 mt-9">   <EmeliyyatNavbar></EmeliyyatNavbar></div>

      <Outlet></Outlet>

    </div>
  )
}

export default Anbaremeliyyat
