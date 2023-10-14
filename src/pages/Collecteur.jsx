import SideBar from '../component/SideBar'
import { useState } from 'react'
const Collecteur = () => {
  const [fileInputState, setFileInputState] = useState('')
  const [previewSource, setPreviewSource] = useState('')
  const [selectedFile, setSelectedFile] = useState()

  const handleFileInputChange = e => {
    const file = e.target.files[0]
    previewFile(file)
    setSelectedFile(file)
    setFileInputState(e.target.value)
  }
  const previewFile = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  return (
    <>

<h1 className='text-3xl font-bold'>Collecteur </h1>

    <div className='lg:w-5/12 m-auto w-full flex-col bg-red-300 items-center justify-center mt-0 '>
     
      <h2 className='mt-4 text-gray-500 font-bold'>
        Veuillez remplir le formulaire suivant 
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
            <option value='samedi'>samedi</option>
            <option value='Dimanche'>Dimanche</option>
            <option value='Lundi'>Lundi</option>
            <option value='Mardi'>Mardi</option>
            <option value='Mercredi'>Mercredi</option>
            <option value='Jeudi'>Jeudi</option>
            <option value='Vendredi'>Vendredi</option>
          </select>
        </div>
      </div>

      <div className='w-full relative lg:w-2/5 max-h-max p-4'>
        <div className=' border border-gray-400  flex flex-col rounded-lg p-1 w-full'>
          <label className='  absolute top-1 left-8 bg-white   '>
            Heure Debut
          </label>
          <input
            className='p-3 bg-white'
            type='number'
            id='hourInput'
            name='hours'
            min='0'
            max='23'
          />
        </div>
      </div>

      <div className='w-full relative lg:w-2/5 max-h-max p-4'>
        <div className=' border border-gray-400  flex flex-col rounded-lg p-1 w-full'>
          <label className='  absolute top-1 left-8 bg-white   '>
            Heure Fin
          </label>
          <input
            className='p-3 bg-white'
            type='number'
            id='hourInput'
            name='hours'
            min='0'
            max='23'
          />
        </div>
      </div>

      <div className='w-full relative lg:w-2/5 max-h-max p-4'>
        <div className=' border border-gray-400  flex flex-col rounded-lg p-1 w-full'>
          <label className='  absolute top-1 left-8 bg-white   '>
            Prendre une image des produits 
          </label>
          <input
            id='fileInput'
            type='file'
            name='image'
            className='w-full h-16  px-4 py-4 rounded-md '
            onChange={handleFileInputChange}
            value={fileInputState}
          />

          <div className='mt-2 w-full flex justify-center items-center '>
            {previewSource && (
              <img
                style={{ width: 200, height: 200 }}
                src={previewSource}
                className=' border px-2 py-1 rounded-md '
                alt='chosen'
              />
            )}
          </div>
        </div>
      </div>


      <h2 className='mt-4 text-gray-500 font-bold'>
        Est ce que vous allez vous rendre au point de depot ?
      </h2>
    <div className='flex w-full justify-between mr-[10px]'>
        <input
        className='mt-2'
        type='checkbox'
        size={10}
        ></input>
        <input
        className='mt-2'
        type='checkbox'
        ></input>
    </div>


    </div>
    </>
  )
}

export default Collecteur
