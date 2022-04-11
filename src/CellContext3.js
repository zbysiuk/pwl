import React, { useState, createContext, useEffect } from 'react'

export const CellContext3 = createContext()

export const CellProvider3 = (props) => {
  const [cells3, setCells3] = useState([
    {
      label: 'Wednesday',
      id: 0,
    },
  ])

  useEffect(() => {
    const cellGet = localStorage.getItem('keycell3')
    const cellParse = JSON.parse(cellGet)
    setCells3(cellParse)
  }, [])

  useEffect(() => {
    const myObj = JSON.stringify(cells3)
    localStorage.setItem('keycell3', myObj)
  }, [cells3])

  return (
    <CellContext3.Provider value={[cells3, setCells3]}>
      {props.children}
    </CellContext3.Provider>
  )
}
