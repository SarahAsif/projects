import React from 'react'
import styled from 'styled-components';

export const Svgs = () =>{
    return ( 
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z" /></svg>
    </div>)

}
const Contact = () => {
 
   
    function toggleClass() {
        console.log('hi')
        return <Svgs/>;
    }
  
    return (
    <Wrapper>
        <div className='flex flex-col justify-center items-center text-center p-9 bg-black text-white'>
            <h1 className=' text-4xl'>Contact Us</h1>
            <svg className='fill-white w-16 h-16 mt-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg> 
            <h4 className='p-7 text-xl'>+1(23) 456 7890</h4>
            <svg onClick={() => toggleClass()} className='fill-white w-16 h-16 mt-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
            <h4 className='p-7 text-xl'>info@example.com</h4>
            
            </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
path {
    cursor: pointer;

  }
    .selected {
    fill: red;
  }
  
  .hover {
    fill: red;
  }
`

export default Contact