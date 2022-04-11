import React, { useState, createContext, useEffect } from 'react'

export const CellContext4 = createContext()

export const CellProvider4 = (props) => {
  const [cells4, setCells4] = useState([
    {
      label: 'Thursday',
      id: 0,
    },
  ])

  useEffect(() => {
    const cellGet = localStorage.getItem('keycell4')
    const cellParse = JSON.parse(cellGet)
    setCells4(cellParse)
  }, [])

  useEffect(() => {
    const myObj = JSON.stringify(cells4)
    localStorage.setItem('keycell4', myObj)
  }, [cells4])

  return (
    <CellContext4.Provider value={[cells4, setCells4]}>
      {props.children}
    </CellContext4.Provider>
  )
}
