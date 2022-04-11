import React, { useState, useContext } from 'react'
import { CellContext4 } from './CellContext4'
import styles from './cell.module.css'

const BasicCell4 = () => {
  const [cells4, setCells4] = useContext(CellContext4)

  const [LabelButton4, setLabelButton4] = useState('')

  const idn = cells4.length

  const updateLabel4 = (event) => {
    setLabelButton4(event.target.value)
  }

  const addCellHandler4 = (event) => {
    event.preventDefault()
    setCells4((prevCell) => [...prevCell, { label: LabelButton4, id: idn }])
    setLabelButton4('')
  }

  const cellHandler = (e) => {
    setCells4(cells4.filter((el) => el.id != e.target.value))
  }

  return (
    <div>
      <form onSubmit={addCellHandler4}>
        <input
          style={{
            left: '824px',
            zIndex: '2',
            backgroundColor: 'rgb(228, 76, 101)',
          }}
          className={styles.inputPlan}
          type="text"
          name="labelButton4"
          value={LabelButton4}
          onChange={updateLabel4}
        />
      </form>
      {cells4.map((cell) =>
        (() => {
          switch (cell.label) {
            case 'matematyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonMat}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'j.polski':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonPol}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'j.angielski':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonAng}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'muzyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonMuz}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case '.':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonNull}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'plastyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonPlast}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'wos':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonWos}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'informatyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonInfo}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'chemia':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonChem}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'wf':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonWf}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'religia':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonRelig}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'fizyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonFiz}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'biologia':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonBiol}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'geografia':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonGeog}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'j.niemiecki':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonNiem}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            case 'historia':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                    }}
                    className={styles.addButtonHis}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )

            default:
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '812px',
                      zIndex: '1',
                      backgroundColor: 'rgb(218, 20, 53)',
                    }}
                    className={styles.addButton}
                    onClick={cellHandler}
                    value={(cell.label, cell.id)}
                  >
                    {cell.label}
                  </button>
                </li>
              )
          }
        })(),
      )}
    </div>
  )
}

export default BasicCell4
