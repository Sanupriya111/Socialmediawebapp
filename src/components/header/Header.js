
import './header.css'
import {Link} from  "react-router-dom";
import {Feedback,NotificationImportant,Accessibility} from '@material-ui/icons';
function Header() {
    return(
<div>
<div className="jumbotron">
  <div className="row header">
    <div className="col">
      <h1>Facebook</h1>
    </div>
    <div className="col searchcol">
    <input type="text" placeholder="Search.." className="search" name="search"/>
      <button type="submit" className='icon'><i className="fa fa-search "></i></button>
    </div>
    <div className="col">
    <ul className="nav justify-content-end nav1">
  <li className="nav-item ">
  <Link to="/profile" className='text-white'>  Profile</Link>
  </li>&nbsp;&nbsp;
  <li className="nav-item nav">
  <Link to="/login" className='text-white'> Home</Link>
  </li>
  
</ul>
    </div>
    <div className="col">
      <Accessibility/>&nbsp;
      <Feedback/>&nbsp;
      <NotificationImportant/>
      <img src="/assets/profile.webp" className='img'/>

    </div>
    
  </div>
</div>


    </div>
    

    );
    
}
export default Header;
