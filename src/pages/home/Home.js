import Header from '../../components/header/Header';
import Middle from '../../components/middlebar/Middle';
import Sidebar from '../../components/sidebar/Sidebar';
import Middle2 from'../../components/middle2/Middle2';
import Right from'../../components/rightbar/Right';
import Sidebar2 from '../../components/sidebar2/Sidebar2';
import Right2 from '../../components/right2/Right2';
import {arr}  from '../../dummyarray';
import { arr1 } from '../register/posts';

function Home() {
    return(
     <> 
     <div class="row">
     <Header/></div>
     <div class="row">
    <div class="col-md-2">
    <div class="row">
    <Sidebar/>
    </div>
    <div class="row">
        {console.log(arr)}
        {
            
        arr.map((val,i)=>{
            console.log("val"+JSON.stringify(val));
 return <Sidebar2 key={i} values={val}/>
        })}
   {/* <Sidebar2 /> */}
    </div>
    </div>
    
    <div class="col-md-7">
    <Middle/>
    <div class="col">
      {
      arr1.map((post,p)=>{
        console.log("posts"+JSON.stringify(post));
        return <Middle2 key={p} posts={post}/>
      })}
      
       </div>
    </div>
    
    <div class="col-md-3">
    <Right/>
    <div class="col-md-12">
      {
    arr.map((val,i)=>{
            console.log("val"+JSON.stringify(val));
 return <Right2 key={i} values={val}/>  })}</div>
    </div>
  
  </div>
</>
   
    );
    
}
export default Home;
