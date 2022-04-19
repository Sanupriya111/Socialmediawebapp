import { useState } from "react";
import './middle2.css'
import {DragIndicator,Favorite,ThumbUp} from '@material-ui/icons';
function Middle2(props)
{
    const [like, setLike] = useState(props.posts.like)
    const [unLike,setUnLike]=useState(false)
    function clickHandler()
    {
        setLike(unLike?like-1:like+1)
   
        setUnLike(!unLike)
    }
    return(
        <>
        <div className='middiv'>
            <div style={{display:"flex"}}>
             <img src={props.posts.img} className='img'/><h6 className='h6'>{props.posts.name}</h6>
             <p className='h6' >{props.posts.time}</p>
    
    <span style={{marginLeft:'200px'}} className='h6'><DragIndicator/></span></div>
    
    
    <div className='div2'><h5 >{props.posts.heading}</h5>
    <img src={props.posts.Image} className='img1'/></div><div className='div3'>
    <span style={{color:"blue", marginLeft:'50px'}}><ThumbUp onClick={clickHandler}/></span>
    <span style={{color:"red", marginLeft:'10px'}}> <Favorite/></span>&nbsp;
    <p>{like}</p>&nbsp;<p>People Likeit</p>&nbsp;
    <p style={{marjinLeft:"300px"}}>{props.posts.comments}</p></div>
    </div>
    </>
    );

}
export default Middle2;