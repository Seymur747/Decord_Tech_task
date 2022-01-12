import * as axios from 'axios'

 async function GetUsers(){

     let result = await axios.get('https://jsonplaceholder.typicode.com/users')

     return   result  
     
}
export default GetUsers;