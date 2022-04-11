import React from 'react'

import BasicCell from './BasicCell'
import BasicCell1 from './BasicCell1'
import BasicCell2 from './BasicCell2'
import BasicCell3 from './BasicCell3'
import BasicCell4 from './BasicCell4'
import BasicCell5 from './BasicCell5'
import BasicCell6 from './BasicCell6'

import { CellProvider } from './CellContext'
import { CellProvider1 } from './CellContext1'
import { CellProvider2 } from './CellContext2'
import { CellProvider3 } from './CellContext3'
import { CellProvider4 } from './CellContext4'
import { CellProvider5 } from './CellContext5'
import { CellProvider6 } from './CellContext6'

function App() {
  return (
    <div className="container">
      <h1 className="roster">Veronica's Week Rolling Roster</h1>
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          zIndex: '8',
        }}
      >
        <CellProvider>
          <BasicCell />
        </CellProvider>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '1rem',
          zIndex: '7',
        }}
      >
        <CellProvider1>
          <BasicCell1 />
        </CellProvider1>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '1rem',
          zIndex: '6',
        }}
      >
        <CellProvider2>
          <BasicCell2 />
        </CellProvider2>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '1rem',
          zIndex: '5',
        }}
      >
        <CellProvider3>
          <BasicCell3 />
        </CellProvider3>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '1rem',
          zIndex: '4',
        }}
      >
        <CellProvider4>
          <BasicCell4 />
        </CellProvider4>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '1rem',
          zIndex: '3',
        }}
      >
        <CellProvider5>
          <BasicCell5 />
        </CellProvider5>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '1rem',
          zIndex: '2',
        }}
      >
        <CellProvider6>
          <BasicCell6 />
        </CellProvider6>
      </div>
    </div>
  )
}
export default App
