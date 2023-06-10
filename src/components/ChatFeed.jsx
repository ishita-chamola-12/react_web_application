// functional component chatfeed
// we have object inside curly brackets 
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";


const ChatFeed=(props)=>{
    
    // destructuring from props 

    const {chats,activeChat,userName,messages} = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts=(message,isMyMessage)=>{
        // map over people who have read the message 

         return chat.people.map((person,index)=> person.last_read===message.id && (

            // this code is only executed if the person has read the message 
            //The purpose of this code is to determine if a person has read a specific message. It checks if the last_read property of each person in the chat.people array matches the id of a message object.
            // the code key={read${index}} creates a unique key for each element in the list/array by concatenating the string "read" with the index value. 
            <div
            key={`read_${index}`}
            className="read-receipt"
            style={{float : isMyMessage ?'right':'left',
            backgroundImage:`url(${person?.person?.avatar})` }}  >
            </div>

        ) ) ;
    }

    // functional component for generating messages 

    const renderMessages=()=>{
        // fetch messages 

        const keys=Object.keys(messages); // keys is an array 

        // render messages using call back function 

        return keys.map((key,index)=>{
            const message= messages[key]; // loops over keys and extracts message
            const lastMessageKey= index===0? null : keys[index-1]; // make sure to find the last message 
            const isMyMessage=userName===message.sender.username;

            //to create message 
            return (

                <div key={`mssg_${index}`} style={ { width :'100%'}}>

                    <div className="message-block">

                       { isMyMessage ?<MyMessage message={message}/>:<OtherMessage message={message} lastMessage={messages[lastMessageKey]}/> }

        
                    </div>

                    <div className="read-receipts" style={{marginRight:isMyMessage ? '18px':'0px',marginLeft:isMyMessage?'0px':'68px'}}>
                        {renderReadReceipts(message,isMyMessage)}
                    </div>


                </div>
            );
        })
    }

    if (!chat) return "Loading..."
// ? is used to make sure chat is available before accessing its title 

// Overall, this code snippet of chat subtitle is mapping through an array of people in a chat and returning a new array containing the userName property of each person.


    return(
        <div className="chat-feed">

            <div className="chat-title-container">

                <div className="chat-title" >{chat.title}  </div>

                <div className="chat-subtitle">
                    {chat.people.map((person) =>` ${person.person.username}`)}

                </div>
            </div>

            {renderMessages()}

            <div style ={{height:'100px'}}/>

            <div className="message-form-container">

                <MessageForm {...props} chatId={activeChat}/>

            </div>







           
        </div>
    );



}


export default ChatFeed;