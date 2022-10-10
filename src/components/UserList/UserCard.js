import './app.css'

function UserCard (props){
    const{user: {name: {first, last}, email, picture:{medium: imgSrc}}} = props;
    return(
        <div className='card'>
            <img src={imgSrc} className='img'/>
            <h1>{first}, {last}</h1>
            <p>{email}</p>
        </div>
    )
}
export default UserCard