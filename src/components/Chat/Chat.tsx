import { CardGiftcard, Gif } from "@mui/icons-material";
import "./Chat.scss"
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {  useAppSelector } from "../../app/hooks";
import { useEffect, useState , useRef} from "react";
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import useSubCollection from "../../hooks/useSubCollection";


const Chat = () => {

    const [inputText, setInputText] = useState<string>("")
    const channelId = useAppSelector((state) => state.channel.channelId)
    const channelName = useAppSelector((state) =>state.channel.channelName)
    const user = useAppSelector((state) => state.user.user)
    const {subDocuments: messages} = useSubCollection("channels", "messages")
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);
    



    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        //channelsコレクションの中にあるmessageコレクションの中にメッセージ情報を入れる
        const collectionRef :CollectionReference<DocumentData> = collection(
            db, "channels", String(channelId), "messages"
        );

        const docRef:  DocumentReference<DocumentData> = await addDoc(collectionRef, {
            message: inputText,
            timestamp: serverTimestamp(),
            user: user
        })

        setInputText("")
    }



    return (
    <div className="Chat">
        <ChatHeader channelName = {channelName} />
        <div className="chatMessage" >
            {messages.map((message, index) => (
                <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
            ))}
            <div ref={messagesEndRef} />

        </div>

        <div className="chatInput" >
            <AddCircleOutlineIcon />
            <form>
                <input type="text" placeholder="message" 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText}/>
                <button type="submit" className="chatInputbutton" 
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>sendMessage(e)}>送信</button>
            </form>
            <div className="chatInputIcons" >
                <CardGiftcard />
                <Gif />
                <InsertEmoticonIcon/>
            </div>
        </div>
    </div>


    // chatInput
)
}

export default Chat;