import SideBar from '../component/SideBar'
const Collecteur = () => {
  return (
    <div className='py-4 px-4'>
      <h1 className='text-3xl font-bold'>Collecteur </h1>

      <h2 className='mt-4 text-gray-500'>
        Veuillez remplir le formulaire suivant{' '}
      </h2>

      <div className='w-full relative lg:w-2/5 max-h-max p-4'>
        <div className=' border border-gray-400  flex flex-col rounded-lg p-1 w-full'>
          <label className='  absolute top-1 left-8 bg-white   '>
            Quantite
          </label>
          <input
            type='text'
            className=' p-2 outline-none'
            placeholder='name ....'
            //   value={nom}
            //   onChange={(e) => { setnom(e.target.value) }}
          />
        </div>
      </div>

   

      <div className='w-full relative lg:w-2/5 max-h-max p-4'>
        <div className=' border border-gray-400  flex flex-col rounded-lg p-1 w-full'>
          <label className='  absolute top-1 left-8 bg-white   '>
            les jours libre 
          </label>
         <select className='bg-white p-3'>
            <option value="samedi">samedi</option>
            <option value="Dimanche">Dimanche</option>
            <option value="Lundi">Lundi</option>
            <option value="Mardi">Mardi</option>
            <option value="Mercredi">Mercredi</option>
            <option value="Jeudi">Jeudi</option>
            <option value="Vendredi">Vendredi</option>
         </select>
        </div>
      </div>

      <div className='w-full relative lg:w-2/5 max-h-max p-4'>
        <div className=' border border-gray-400  flex flex-col rounded-lg p-1 w-full'>
          <label className='  absolute top-1 left-8 bg-white   '>
            Heure Debut 
          </label>
          <input
            type='text'
            className=' p-2 outline-none'
            placeholder='name ....'
            //   value={nom}
            //   onChange={(e) => { setnom(e.target.value) }}
          />
        </div>
      </div>
    </div>
  )
}

export default Collecteur
