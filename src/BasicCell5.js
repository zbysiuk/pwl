import React, { useState, useContext } from 'react'
import { CellContext5 } from './CellContext5'
import styles from './cell.module.css'

const BasicCell5 = () => {
  const [cells5, setCells5] = useContext(CellContext5)

  const [LabelButton5, setLabelButton5] = useState('')

  const idn = cells5.length

  const updateLabel5 = (event) => {
    setLabelButton5(event.target.value)
  }

  const addCellHandler5 = (event) => {
    event.preventDefault()
    setCells5((prevCell) => [...prevCell, { label: LabelButton5, id: idn }])
    setLabelButton5('')
  }

  const cellHandler = (e) => {
    setCells5(cells5.filter((el) => el.id != e.target.value))
  }

  return (
    <div>
      <form onSubmit={addCellHandler5}>
        <input
          style={{
            left: '1024px',
            zIndex: '2',
            backgroundColor: 'rgb(88, 250, 21)',
          }}
          className={styles.inputPlan}
          type="text"
          name="labelButton5"
          value={LabelButton5}
          onChange={updateLabel5}
        />
      </form>
      {cells5.map((cell) =>
        (() => {
          switch (cell.label) {
            case 'matematyka':
              return (
                <li key={Math.random() * 999}>
                  <button
                    style={{
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
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
                      left: '1012px',
                      zIndex: '1',
                      backgroundColor: 'rgb(38, 230, 21)',
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

export default BasicCell5
