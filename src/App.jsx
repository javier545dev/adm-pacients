import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListPacients from './components/ListPacients'

function App() {
  const [pacients, setPacients] = useState([])
  const [pacient, setPacient] = useState({})

  const deletePacient = id => {
    const pacientUpdate = pacients.filter(pacient => pacient.id !== id)
    setPacients(pacientUpdate)
  }

  useEffect(() => {
    const pacientsLS = JSON.parse(localStorage.getItem('pacients')) ?? []
    setPacients(pacientsLS)
  }, [])

  useEffect(() => {
    localStorage.setItem('Pacients', JSON.stringify(pacients))
  }, [pacients])

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex '>
        <Form
          pacients={pacients}
          setPacients={setPacients}
          setPacient={setPacient}
          pacient={pacient}
        />

        <ListPacients
          pacients={pacients}
          setPacient={setPacient}
          deletePacient={deletePacient}
        />
      </div>
    </div>
  )
}

export default App
