import { useState } from "react";

export default function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (id)=>{
       setComments(comments.filter(comment => comment.id !== id)) 
    }

    return (
        <div className="comments-list">
            <ul>{comments.map(comment =>(
                <li key={comment.id}>{comment.text}
                    <button className="delete-button" onClick={()=>deleteComment(comment.id)}>Удалить</button>
                </li>
                
            ))}</ul>
        </div>
    )
}