import React, { useState, createContext, useEffect } from 'react'

export const CellContext2 = createContext()

export const CellProvider2 = (props) => {
  const [cells2, setCells2] = useState([
    {
      label: 'Tuesday',
      id: 0,
    },
  ])

  useEffect(() => {
    const cellGet = localStorage.getItem('keycell2')
    const cellParse = JSON.parse(cellGet)
    setCells2(cellParse)
  }, [])

  useEffect(() => {
    const myObj = JSON.stringify(cells2)
    localStorage.setItem('keycell2', myObj)
  }, [cells2])

  return (
    <CellContext2.Provider value={[cells2, setCells2]}>
      {props.children}
    </CellContext2.Provider>
  )
}
