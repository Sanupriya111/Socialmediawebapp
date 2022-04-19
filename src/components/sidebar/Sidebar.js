import './sidebar.css'
import {RssFeed,Feedback,PlayCircleFilledRounded,PeopleAltRounded,SchoolRounded,TurnedInRounded,MovieCreationRounded,LiveHelpRounded,LocalMallRounded} from '@material-ui/icons';
function Sidebar() {
    return(
        <div className=''>
     <div className='sidebar'><RssFeed/>
     <p className='p'>Feed</p></div>
     <div className='sidebar'>
     <Feedback/><p className='p'>Chats</p>
     </div>
     <div className='sidebar'>
     <PlayCircleFilledRounded/><p className='p'>Videos</p>
     </div>
     <div className='sidebar'>
     <PeopleAltRounded/><p className='p'>Groups</p>
     </div>
     <div className='sidebar'>
     <TurnedInRounded/><p className='p'>BookMarks</p>
     </div>
     <div className='sidebar'>
     <LiveHelpRounded/><p className='p'>Questions</p>
     </div>
     <div className='sidebar'>
     <LocalMallRounded/><p className='p'>JObs</p>
     </div>
     <div className='sidebar'>
     <MovieCreationRounded/><p className='p'>Events</p>
     </div>
     <div className='sidebar'>
     <SchoolRounded/><p className='p'>Courses</p>
     </div>
     <button type="button" class="btn btn-secondary" style={{marginLeft:'20px'}}>Show more</button>
    <hr/>
     </div>
   
    );
    
}
export default Sidebar;
