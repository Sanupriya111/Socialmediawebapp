
import './middle.css'
import {Collections,Bookmark,EditLocation,InsertEmoticon} from '@material-ui/icons';

function Middle()
{
   
    return(
        <div className='middlediv'>
            <img src="/assets/profile.webp" className='img'/>
            <input type="text" placeholder='Whats in your mind?'className='txt' ></input>
           <hr/> <div  style={{display:'flex'}}>
            <span style={{color:"red"}} className='icons'><Collections/></span><h6>Photo or Vedio</h6> 
            <span style={{color:"blue"}} className='icons'><Bookmark/></span><h6>Tag</h6>
            <span style={{color:"green"}} className='icons'><EditLocation/></span><h6>Location</h6>
            <span style={{color:"yellow"}} className='icons'><InsertEmoticon/></span><h6>Feelings</h6>
            <button type="button" class="btn btn-success" style={{marginLeft:'150px'}} >Share</button>
</div>
        </div>

    );
}
export default Middle;