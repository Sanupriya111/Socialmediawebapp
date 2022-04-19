
import './profile.css'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
 import Sidebar2 from '../../components/sidebar2/Sidebar2';
import Middle from '../../components/middlebar/Middle';
 import Middle2 from '../../components/middle2/Middle2';
 import { arr1 } from '../register/posts';
 import { arr } from '../../dummyarray';
import Profilesidebar from '../../components/profilesidebar/Profilesidebar';
function Profile()
{
    return(
<>
<div class="row">
<Header/>
    </div>
<div class="row">
<div class="col-md-3">
    <div class="row"><Sidebar/></div>
    <div class="row">{
            
            arr.map((val,i)=>{
                console.log("val"+JSON.stringify(val));
     return <Sidebar2 key={i} values={val}/>
            })}
       </div>
  </div>
<div class="col-md-9">
<div class="row-md-12">
    <div className='prof'></div><div className='div1'><img src="../../../assets/profile.webp" className='profimg'/><h4>Sanupriya Sanoos</h4><p>Hello friends!!!</p></div></div>
<div class="row">
<div class="col-md-8">
<div class="row">
<Middle/>
</div>
<div class="row">
{
      arr1.map((post,p)=>{
        console.log("posts"+JSON.stringify(post));
        return <Middle2 key={p} posts={post}/>
      })}
       </div></div>
<div class="col-md-4">
<div class="row"><h4>User information</h4>
<p>City:Calicut<br/>
    From:Kerala<br/>
    Relationship:Single</p></div>
    
            <div class="row">
            {
            arr.map((val,i)=>{
                console.log("val"+JSON.stringify(val));
     return <Profilesidebar key={i} values={val}/>
            })}
       
            
           </div>
<div class="row"></div>
    </div></div>
    </div>
</div>
</>


    );
}
export default Profile;