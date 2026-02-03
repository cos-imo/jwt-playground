import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Outlet } from 'react-router-dom'

export default function Lab2() {
  const location = useLocation()

  return (
    <>
      <h1>Lab2</h1>
      <Outlet />
    </>
  )
}

