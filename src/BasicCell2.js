import React, { useState, useContext } from 'react'
import { CellContext2 } from './CellContext2'
import styles from './cell.module.css'

const BasicCell2 = () => {
  const [cells2, setCells2] = useContext(CellContext2)

  const [LabelButton2, setLabelButton2] = useState('')

  const idn = cells2.length

  const updateLabel2 = (event) => {
    setLabelButton2(event.target.value)
  }

  const addCellHandler2 = (event) => {
    event.preventDefault()
    setCells2((prevCell) => [...prevCell, { label: LabelButton2, id: idn }])
    setLabelButton2('')
  }

  const cellHandler = (e) => {
    setCells2(cells2.filter((el) => el.id != e.target.value))
  }

  return (
    <div>
      <form onSubmit={addCellHandler2}>
        <input
          style={{
            left: '424px',
            zIndex: '2',
            backgroundColor: 'rgb(199, 63, 226)',
          }}
          className={styles.inputPlan}
          type="text"
          name="labelButton2"
          value={LabelButton2}
          onChange={updateLabel2}
        />
      </form>
      {cells2.map((cell) =>
        (() => {
          switch (cell.label) {
            case 'matematyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
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
                      left: '412px',
                      zIndex: '1',
                      backgroundColor: 'rgb(186, 18, 219)',
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

export default BasicCell2
