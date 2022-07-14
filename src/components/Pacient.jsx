const Pacients = ({ pacient, setPacient, deletePacient }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = pacient
  const handleDelete = () => {
    const answer = confirm('¿Estas seguro de eliminar este paciente?')

    if (answer) {
      deletePacient(id)
    }
  }
  return (
    <div className='mx-5 my-10 rounded-xl bg-white px-5 py-10 shadow-md'>
      <p className='mb-3 font-bold uppercase text-gray-700'>
        Nombre: <span className='font-normal normal-case'>{nombre}</span>
      </p>
      <p className='mb-3 font-bold uppercase text-gray-700'>
        Propietario:{' '}
        <span className='font-normal normal-case'>{propietario}</span>
      </p>
      <p className='mb-3 font-bold uppercase text-gray-700'>
        eMail: <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='mb-3 font-bold uppercase text-gray-700'>
        Fecha Alta: <span className='font-normal normal-case'>{fecha}</span>
      </p>
      <p className='mb-3 font-bold uppercase text-gray-700'>
        Sintomas: <span className='font-normal normal-case'>{sintomas}</span>
      </p>
      <div className='flex justify-around pt-3'>
        <button
          type='button'
          className='rounded-full bg-indigo-600 py-2 px-10 font-bold uppercase text-white hover:bg-indigo-700'
          onClick={() => setPacient(pacient)}
        >
          Editar
        </button>
        <button
          type='button'
          className='rounded-full bg-red-600 py-2 px-4 font-bold text-white hover:bg-red-700'
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Pacients
