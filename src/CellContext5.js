import React, { useState, createContext, useEffect } from 'react'

export const CellContext5 = createContext()

export const CellProvider5 = (props) => {
  const [cells5, setCells5] = useState([
    {
      label: 'Friday',
      id: 0,
    },
  ])

  useEffect(() => {
    const cellGet = localStorage.getItem('keycell5')
    const cellParse = JSON.parse(cellGet)
    setCells5(cellParse)
  }, [])

  useEffect(() => {
    const myObj = JSON.stringify(cells5)
    localStorage.setItem('keycell5', myObj)
  }, [cells5])

  return (
    <CellContext5.Provider value={[cells5, setCells5]}>
      {props.children}
    </CellContext5.Provider>
  )
}
