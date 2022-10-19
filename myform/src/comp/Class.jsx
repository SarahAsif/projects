import React from 'react'

const Class = () => {
  return (
    <div>
        <div className='flex lg:flex-row flex-col justify-center items-center text-center xl:p-8 bg-gray-300'>
          <div className='w-1/2 '>
            <h1 className='text-5xl pt-3 text-black drop-shadow-md '>Best in Class</h1>
            <h4 className='xl:m-7 m-2 text-xl'>Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art customer service.</h4>
            <button className='rounded-sm bg-cyan-700 p-5 m-2 hover:bg-cyan-900 hover:rounded-xl text-white '>CLASSIFY IT</button>
          </div>
          <div className='w-1/2'>
            <img className='rounded-full' 
            src="https://images.unsplash.com/photo-1573209680076-bd7ec7007616?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="image" />
          </div>
        </div>
    </div>
  )
}

export default Class