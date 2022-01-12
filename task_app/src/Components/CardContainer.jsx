import Card from './Card'
import React, { useState, useEffect } from 'react';
import GetUsers from './../Api/Api'
import s from './Card.module.css'


let CardContainer = () =>{

    const [users, setUsers] = useState([]);

    useEffect( async() => {
      let  response  = await GetUsers();
      global.response=response.data;
        setUsers(response.data)
        return response;
      }, [0])



      let Filter = (e) =>{
        let value = e.target.value;
        setUsers(global.response);
        let copy= [...global.response]
        const result = copy.filter(element => element.name.includes(value)); 
        setUsers(result);
    }

    return (
        <div className='row'>
               <div className={`col-md-12 ${s.inputDiv}`}>
                    <input onKeyUp={Filter} placeholder='Search'/>
               </div>
            {users.length&&users.map(element=><Card users={element}  key={element.id}/>)}
        </div>
    )
}
export default CardContainer;