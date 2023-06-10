const OtherMessage=({message,lastMessage})=>{

    // check whether it is first message by other user 
    const isFirstMesaage = !lastMessage || lastMessage.sender.username != message.sender.username;

    return (
        <div className="message-row">
            {isFirstMesaage && (
                <div className="message-avatar"
                style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                />
            )}


    {message?.attachments?.length>0
            ?(
                <img
                src={message.attachments[0].file}
                alt="message-attachemnt"
                className="message-image"
                style={{marginLeft:isFirstMesaage?'4px':'48px'}}
                />
            )
            :( <div className="message" style={{float:'left',backgroundColor:'#CABCDC',marginLeft:isFirstMesaage?'4px':'48px'}}>
                        {message.text}
                </div>)
    }

        </div>
        
        
    );
}

export default OtherMessage;