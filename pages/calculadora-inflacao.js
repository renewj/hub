import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function calculateInflation(initialValue, rate, years) {
  // rate em percentual (ex: 5 para 5%)
  const inflationRate = rate / 100
  return initialValue * Math.pow(1 + inflationRate, years)
}

export default function InflationCalculatorPage() {
  const [initialValue, setInitialValue] = useState(1000)
  const [rate, setRate] = useState(5)
  const [years, setYears] = useState(1)
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = calculateInflation(Number(initialValue), Number(rate), Number(years))
    setResult(value)
  }

  return (
    <>
      <Header />
      <main style={{maxWidth: '500px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 16px #eee'}}>
        <h1>Calculadora de Inflação (Juros Compostos)</h1>
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom: '1rem'}}>
            <label>Valor Inicial: </label>
            <input
              type="number"
              value={initialValue}
              onChange={e => setInitialValue(e.target.value)}
              step="0.01"
              min="0"
              required
            />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label>Taxa de Inflação Anual (%): </label>
            <input
              type="number"
              value={rate}
              onChange={e => setRate(e.target.value)}
              step="0.01"
              min="0"
              required
            />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label>Quantidade de anos: </label>
            <input
              type="number"
              value={years}
              onChange={e => setYears(e.target.value)}
              min="1"
              required
            />
          </div>
          <button type="submit">Calcular</button>
        </form>
        {result !== null && (
          <div style={{marginTop: '2rem', fontWeight: 'bold'}}>
            Valor futuro ajustado pela inflação: R$ {result.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </div>
        )}
        <div style={{marginTop: '2rem', fontSize: '0.9rem', color: '#666'}}>
          <p>
            <strong>Fórmula:</strong> Valor Futuro = Valor Inicial × (1 + inflação%)<sup>n</sup>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
