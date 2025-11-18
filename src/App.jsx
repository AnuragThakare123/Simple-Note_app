import React, { useActionState, useState } from 'react'

const App = () => {

  
  
const [title, setTitle] = useState('')
const [details, setDetails] = useState('')

const [task, setTask] = useState([])

  
  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    
    console.log(title);
    console.log(details);

    copyTask.push({title, details})
    setTask(copyTask)


   
    setTitle('')
    setDetails('')

  } 

  return (
    <div className='h-screen bg-black p-20'>

      
      <h2 class="text-3xl font-bold text-white text-center tracking-wide uppercase border-b-4 border-green-500 pb-2">
        Note App
      </h2>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex flex-col items-between  m-5 w-15">

        <div className="flex w-15 gap-4">
          <h1 className='text-white  bg-gray-900 m-5 text-4xl'>Add Notes</h1>

          <div className="flex flex-col items-center w-full mt-10">
            {/* first input */}
            <input
              type="text"
               placeholder='Enter Task Heading'
              className='px-5 py-2 border-2 rounded m-5 border-red-500 w-1/2 '
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)

              }}
              ></input>



            {/* Detailed input */}
            <textarea
              className='px-5 py-2 border-2 h-32 rounded m-5 border-red-500 w-1/2'
              placeholder='Enter Details'
              name=""
              id="" 
              value={details}
              onChange={(e)=>{
                setDetails(e.target.value);
              }}
              />

            <button
              className="px-10 py-2 border-2 rounded font-medium bg-red-500 text-white px-4 py-2 w-1/2 hover:bg-green-600"
            >
              Add Note
            </button>
         
          </div >

          <div className='bg-gray-900 border-2 rounded'>
          <img className="h-25 w-25 bg-cover" src='https://th.bing.com/th/id/OIP.sNB4W4dEz8LlPgzbKL9B9AHaHa?w=215&h=215&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' />
          <h1 className='text-white m-5 text-xl'>Hi, Welcome to Note...!!</h1>
          </div>

        </div>
      </form>

      <div >
        <div className=" bg-gray-900  p-10">
          <h1 className='text-white m-5 text-4xl'>Recent Notes</h1>

         {/* Cards Logic */}
          <div className='flex gap-5 flex-wrap h-full overflow-auto' >
          
              {task.map(function(elem,idx){
                
                return <div key={idx} className=' relative h-52 w-40 bg-cover bg-center rounded-xl p-10  bg-[url("https://th.bing.com/th/id/OIP.I32cB6jhb1yCAtMxazsRkwHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3")]'>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-2 font-semibold text-gray-700'>{elem.details}</p>
                </div>
               
              })}

          </div>

        </div>
      </div>


    </div>
  )
}

export default App
