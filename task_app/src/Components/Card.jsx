import s from './Card.module.css'

let Card = (props) =>{
    return (
        <div className="col-md-6">
            <div className={`row ${s.Card}`}>
                <div className='col-md-6'>
                    <span>Name</span>
                    <h6>{props.users.name}</h6>
                </div>
                <div className='col-md-6'>
                     <span>Username</span>
                    <h6>{props.users.username}</h6>
                </div>
                <div className='col-md-6'>
                     <span>Email</span>
                    <h6>{props.users.email}</h6>
                </div>
                <div className='col-md-6'>
                     <span>Phone</span>
                    <h6>{props.users.phone}</h6>
                </div>
            </div>
       </div>
    )
}

export default Card;