// value will come from state
//the code initializes a state variable named value with an initial value of an empty string, and provides a function named setValue to update the value of value.

import { useState } from "react";
import { sendMessage,isTyping } from "react-chat-engine";
// import icons 
import { SendOutlined,PictureOutlined } from "@ant-design/icons";

const MessageForm=(props)=>{
    const [value,setValue]=useState('');
    const{chatId,creds}=props;

    const handleSubmit=(event)=>{
        // to prevent browser to refresh once send button is clicked 
        event.preventDefault();

        const text=value.trim();

        if(text.length>0 ) {sendMessage(creds,chatId,{text});}

        // remove text after sending message 
        setValue('');
    }

    const handleChange=(event)=>{ 
         setValue(event.target.value);
         isTyping(props,chatId)
    }

    const handleUpload=(event)=>{
        // event contains image in this case 
        sendMessage(props,chatId,{ files:event.target.files,text:''})

    }
    return (

        <form className="message-form" onSubmit={handleSubmit}>

            <input className="message-input"
            placeholder="Send a message ...."
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            />

            {/* to add image tag */}
            <label htmlFor="upload-button">

                <span className="image-button">
                   <PictureOutlined className="picture-icon"/> 
                </span>
            </label>
            {/* take input of image  */}
            <input 
            type="file"
            multiple="false"
            id="upload-button"
            style={{display:'none'}}
            onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>

            </button>
        </form>
        
        
    );
}

export default MessageForm;