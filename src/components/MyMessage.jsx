const MyMessage=({message})=>{

    // find whether message is text message or an image 
    if(message?.attachments?.length>0){
        // in this case message is an attachment 
        return(
            <img
            src={message.attachments[0].file}
            alt="message-attachemnt"
            className="message-image"
            style={{float:'right'}}
            />
        )
    }


    return (
        // if message is not attachment we render the text 
        <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
            {message.text}
        </div>
        
        
    );
};

export default MyMessage;