import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'


const LiveChat = () => {

const [liveMessage,setLiveMessage] = useState("")

  const dispatch = useDispatch()


const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() =>{
     const i = setInterval(() => {
        //API polling
        //console.log("API polling");

        dispatch(addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20) + "🚀"
        }))
     }, 1500);

     return () => clearInterval(i);
     
  },[])


  return (
    <>
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {// DISCLAIMER: Don't use indexes as keys
            chatMessages.map((c,i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
                
            ))
        }
        </div>
       
    </div>
     <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) =>{
      e.preventDefault()
      //console.log("ON form Submit ", liveMessage);
      dispatch(addMessage({
        name:"Tarun",
        message:liveMessage
      }))
      setLiveMessage("")
     }}>
       <input 
        className='px-2 w-80'
       type='text'
       value={liveMessage}
       onChange={(e) => setLiveMessage(e.target.value)}
       />
       <button className='mx-3 px-2 bg-green-100'>Send</button>
    </form>
   </>
  )
}

export default LiveChat