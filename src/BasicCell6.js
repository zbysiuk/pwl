import React, { useState, useContext } from 'react'
import { CellContext6 } from './CellContext6'
import styles from './cell.module.css'

const BasicCell6 = () => {
  const [cells6, setCells6] = useContext(CellContext6)

  const [LabelButton6, setLabelButton6] = useState('')

  const idn = cells6.length

  const updateLabel6 = (event) => {
    setLabelButton6(event.target.value)
  }

  const addCellHandler6 = (event) => {
    event.preventDefault()
    setCells6((prevCell) => [...prevCell, { label: LabelButton6, id: idn }])
    setLabelButton6('')
  }

  const cellHandler = (e) => {
    setCells6(cells6.filter((el) => el.id != e.target.value))
  }

  return (
    <div>
      <form onSubmit={addCellHandler6}>
        <input
          style={{
            left: '1224px',
            zIndex: '2',
            backgroundColor: 'rgb(21, 121, 230)',
          }}
          className={styles.inputPlan}
          type="text"
          name="labelButton6"
          value={LabelButton6}
          onChange={updateLabel6}
        />
      </form>
      {cells6.map((cell) =>
        (() => {
          switch (cell.label) {
            case 'matematyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
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
                      left: '1212px',
                      zIndex: '1',
                      backgroundColor: 'rgb(21, 111, 230)',
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

export default BasicCell6
