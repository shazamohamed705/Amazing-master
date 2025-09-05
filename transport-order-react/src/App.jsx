import TransportOrder from './components/TransportOrder'

function App() {
  return (
    <>
      <button className="print-button" onClick={() => window.print()}>
        طباعة
      </button>
      <TransportOrder />
    </>
  )
}

export default App
