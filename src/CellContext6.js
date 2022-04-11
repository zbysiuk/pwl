import React, { useState, createContext, useEffect } from 'react'

export const CellContext6 = createContext()

export const CellProvider6 = (props) => {
  const [cells6, setCells6] = useState([
    {
      label: 'Saturday',
      id: 0,
    },
  ])

  useEffect(() => {
    const cellGet = localStorage.getItem('keycell6')
    const cellParse = JSON.parse(cellGet)
    setCells6(cellParse)
  }, [])

  useEffect(() => {
    const myObj = JSON.stringify(cells6)
    localStorage.setItem('keycell6', myObj)
  }, [cells6])

  return (
    <CellContext6.Provider value={[cells6, setCells6]}>
      {props.children}
    </CellContext6.Provider>
  )
}
