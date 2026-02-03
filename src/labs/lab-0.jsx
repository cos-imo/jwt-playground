import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Outlet } from 'react-router-dom'

export default function Lab0() {
  const location = useLocation()

  return (
    <>
      <h1>Lab0</h1>
      <Outlet />
    </>
  )
}

