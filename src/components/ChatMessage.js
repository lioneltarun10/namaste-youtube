import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2' >
        <img 
        id="img" 
        draggable="false" 
        className="style-scope yt-img-shadow" 
        alt="" height="24" 
        width="24" 
        src="https://yt4.ggpht.com/ytc/AIf8zZTiEI0G-dAgmZ83pO6kp4IfmiAuQk-Sk3qIyblZRDZWd4TBzivmqyPaTQm5sYAK=s64-c-k-c0x00ffffff-no-rj"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        
    </div>
  )
}

export default ChatMessage