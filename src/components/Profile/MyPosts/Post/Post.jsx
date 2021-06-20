
import s from "./Post.module.css";

const Post =(props) =>{
    return ( 
        <div className={s.item}>
          <img src="https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700_960_720.jpg"/> 
            {props.message}
           <div>
             <span>like</span> {props.likesCount}
           </div>   
        </div>
    )  
}

export default Post;