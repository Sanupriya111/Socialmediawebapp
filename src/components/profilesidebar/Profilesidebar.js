import './profilesidebar.css'
function Profilesidebar(props)
{
    return( 
        <div  className='pdiv'>
            <div>
            <img src={props.values.img} className='proimg'/>{props.values.uname}</div>
        </div>
        );
}
export default Profilesidebar;