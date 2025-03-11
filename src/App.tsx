import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './page/Home'
import { Button } from './componets/Button'
import foget from '../src/assets/foget.svg'




function App() {

  

      const CriarToDoList = () =>{
        console.log("ola mundo")
      }



  return (
    <header className='h-full'>
      
      <div className='flex flex-col items-center justify-center w-full bg-gray-300 h-60 '>
        <nav className='flex  justify-end  gap-4'>

        <img src={foget} width={36} height={36}/>

          <div className='flex items-center  text-5xl font-bold'>
             <span className='text-green-800'>to<span className='text-violet-700'>do</span></span>
          </div>


        </nav>

        <nav className='flex gap-2 absolute mt-56'>
          <input placeholder='Adicione uma nova tarefa' className='w-input pl-8 pr-16 pt-5 pb-5 shadow-lg rounded-lg' />
          <Button click={CriarToDoList}>
            Criar
          </Button>
        </nav>

      </div>


    </header>
  )
}

export default App
