import {Link} from 'react-router-dom'
import Logo from "../../img/rick.png"
import "./home.css"
export function Home() {
    return ( 
        <div className='page'>
        <img src={Logo} alt='rick-and-morty'/>
        <ul className="buttons">
            <Link to="/characters"><li className='char'>Characters</li></Link>
            <Link to="/locations"><li className='loc'>Location</li></Link>
            <Link to="/episodes"><li className='epi'>Episodes</li></Link>
            <Link to="/read-selected"><li className='sel'>Selecionados</li></Link>
        </ul>
        </div>
    );
}