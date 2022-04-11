import React, { useState, createContext, useEffect } from 'react'

export const CellContext1 = createContext()

export const CellProvider1 = (props) => {
  const [cells1, setCells1] = useState([
    {
      label: 'Monday',
      id: 0,
    },
  ])

  useEffect(() => {
    const cellGet = localStorage.getItem('keycell1')
    const cellParse = JSON.parse(cellGet)
    setCells1(cellParse)
  }, [])

  useEffect(() => {
    const myObj = JSON.stringify(cells1)
    localStorage.setItem('keycell1', myObj)
  }, [cells1])

  return (
    <CellContext1.Provider value={[cells1, setCells1]}>
      {props.children}
    </CellContext1.Provider>
  )
}
