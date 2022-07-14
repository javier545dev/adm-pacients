import Pacient from './Pacient'
const ListPacients = ({ pacients, setPacient, deletePacient }) => {
  return (
    <div className='overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5'>
      {pacients && pacients.length ? (
        <>
          <h2 className='text-center text-3xl font-black'>Listado Pacientes</h2>
          <p className='mt-5 mb-10 text-center text-xl'>
            Administra tus{' '}
            <span className='font-bold text-indigo-600'>Pacientes y Citas</span>
          </p>
          {pacients.map((pacient, index) => (
            <Pacient
              key={pacient.id}
              pacient={pacient}
              setPacient={setPacient}
              deletePacient={deletePacient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='text-center text-3xl font-black'>No hay pacientes</h2>
          <p className='mt-5 mb-10 text-center text-xl'>
            Agrega un Paciente{' '}
            <span className='font-bold text-indigo-600'>
              para Administrarlo
            </span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListPacients
