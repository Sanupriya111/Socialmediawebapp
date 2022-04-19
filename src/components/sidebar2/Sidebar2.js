import './sidebar2.css'
function Sidebar2(props)
{
    return(
<div> 
    <img src={props.values.img} className='img5'/><label>{props.values.uname}</label>
   
</div>

    );
}
export default Sidebar2