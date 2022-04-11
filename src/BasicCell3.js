import React, { useState, useContext } from 'react'
import { CellContext3 } from './CellContext3'
import styles from './cell.module.css'

const BasicCell3 = () => {
  const [cells3, setCells3] = useContext(CellContext3)

  const [LabelButton3, setLabelButton3] = useState('')

  const idn = cells3.length

  const updateLabel3 = (event) => {
    setLabelButton3(event.target.value)
  }

  const addCellHandler3 = (event) => {
    event.preventDefault()
    setCells3((prevCell) => [...prevCell, { label: LabelButton3, id: idn }])
    setLabelButton3('')
  }

  const cellHandler = (e) => {
    setCells3(cells3.filter((el) => el.id != e.target.value))
  }

  return (
    <div>
      <form onSubmit={addCellHandler3}>
        <input
          style={{
            left: '624px',
            zIndex: '2',
            backgroundColor: 'rgb(220, 235, 88)',
          }}
          className={styles.inputPlan}
          type="text"
          name="labelButton3"
          value={LabelButton3}
          onChange={updateLabel3}
        />
      </form>
      {cells3.map((cell) =>
        (() => {
          switch (cell.label) {
            case 'matematyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
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
                      left: '612px',
                      zIndex: '1',
                      backgroundColor: 'rgb(199, 219, 18)',
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

export default BasicCell3
