import { useState, useEffect } from 'react'
import Error from './Error'

const Form = ({ pacients, setPacients, pacient, setPacient }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  const randomId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
  }

  useEffect(() => {
    if (Object.keys(pacient).length > 0) {
      setNombre(pacient.nombre)
      setPropietario(pacient.propietario)
      setEmail(pacient.email)
      setFecha(pacient.fecha)
      setSintomas(pacient.sintomas)
    }
  }, [pacient])

  const handleSubmit = e => {
    e.preventDefault()

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return
    }
    setError(false)

    const objectPacient = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (pacient.id) {
      // editando registro
      objectPacient.id = pacient.id
      const editPacient = pacients.map(pacientState =>
        pacientState.id === pacient.id ? objectPacient : pacientState
      )
      setPacients(editPacient)
      setPacient({})
    } else {
      // nuevo registro
      objectPacient.id = randomId()
      setPacients([...pacients, objectPacient])
    }
    // reset formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='text-center text-3xl font-black'>Seguimiento Paciente</h2>
      <p className='mt-5 mb-10 text-center text-lg'>
        Añadir Pacientes y{' '}
        <span className='font-bold text-indigo-600'>Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='mb-10 rounded-lg bg-white py-10 px-5 shadow-md'
      >
        <div className='mb-5'>
          <label
            htmlFor='mascota'
            className='text-gray block font-bold uppercase'
          >
            Nombre Mascota{' '}
          </label>
          <input
            id='mascota'
            type='text'
            placeholder='Nombre de la Mascota'
            className='mt-2 w-full rounded-lg border-2 p-2 placeholder-gray-400'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='propietario'
            className='text-gray block font-bold uppercase'
          >
            Nombre Propietario{' '}
          </label>
          <input
            id='propietario'
            type='text'
            placeholder='Nombre del Propietario'
            className='mt-2 w-full rounded-lg border-2 p-2 placeholder-gray-400'
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='text-gray block font-bold uppercase'
          >
            eMail{' '}
          </label>
          <input
            id='email'
            type='email'
            placeholder='eMail del Propietario'
            className='mt-2 w-full rounded-lg border-2 p-2 placeholder-gray-400'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className='mb-5'>
            <label
              htmlFor='alta'
              className='text-gray block font-bold uppercase'
            >
              Alta{' '}
            </label>
            <input
              id='alta'
              type='date'
              className='mt-2 w-full rounded-lg border-2 p-2 placeholder-gray-400'
              value={fecha}
              onChange={e => setFecha(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label
              htmlFor='sintoma'
              className='text-gray block font-bold uppercase'
            >
              Sintomas{' '}
            </label>
            <textarea
              id='sintomas'
              className='mt-2 h-24 w-full rounded-lg border-2 p-2 placeholder-gray-400'
              placeholder='Describe los sintomas'
              value={sintomas}
              onChange={e => setSintomas(e.target.value)}
            />
          </div>
        </div>
        <input
          type='submit'
          className='w-full cursor-pointer bg-indigo-600 p-3 font-bold uppercase text-white transition-all hover:bg-indigo-700'
          value={pacient.id ? 'Editar Paciente' : 'Añadir Paciente'}
        />
        {error && <Error msg='Todos los campos son obligatorios' />}
      </form>
    </div>
  )
}

export default Form
