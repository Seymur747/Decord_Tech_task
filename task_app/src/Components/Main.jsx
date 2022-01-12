import React, { useContext } from 'react';
import ThemeContext from '../theme-context';
import CardContainer from './CardContainer'

// const BodyColor = React.createContext('white');

let Main = (props) =>{   
    const theme = useContext(ThemeContext);
    // console.log(themes)

    return (
       <div className='container' style={theme}> 
         <button className='btn btn-primary' onClick={props.toggle} >Change</button>
                <CardContainer/>
        </div>
    )
}
export default Main;