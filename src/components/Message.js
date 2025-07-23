import './message.css';

export default function Message(props) {
    return(
        <div className="message">
            {props.text}
        </div>
    )
}

// const Message = ({text})=>{
//     return(
//         <div className="message">
//             <p>{text}</p>
//         </div>
//     )
// }