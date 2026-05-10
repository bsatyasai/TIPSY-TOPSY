import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{
      fontFamily: 'Arial',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1>🔥 TIPSY-TOPSY</h1>
      <p>Your fashion website is live!</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
