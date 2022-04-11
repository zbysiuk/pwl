import React, { useState, createContext, useEffect } from 'react'

export const CellContext = createContext()

export const CellProvider = (props) => {
  const [cells, setCells] = useState([
    {
      label: 'X',
      id: 0,
    },
  ])

  useEffect(() => {
    const cellGet = localStorage.getItem('keycell')
    const cellParse = JSON.parse(cellGet)
    setCells(cellParse)
  }, [])

  useEffect(() => {
    const myObj = JSON.stringify(cells)
    localStorage.setItem('keycell', myObj)
  }, [cells])

  return (
    <CellContext.Provider value={[cells, setCells]}>
      {props.children}
    </CellContext.Provider>
  )
}
