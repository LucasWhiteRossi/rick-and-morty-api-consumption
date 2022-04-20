import {Link} from 'react-router-dom'
import Logo from "../../img/rick.png"
import "./home.css"
export function Home() {
    return ( 
        <div className='page'>
            <img src={Logo} alt='rick-and-morty'/>
            <ul className="buttons">
                <Link to="/characters" style={{textDecoration: "none"}}><li className='char'>Characters</li></Link>
                <Link to="/locations" style={{textDecoration: "none"}}><li className='loc'>Location</li></Link>
                <Link to="/episodes" style={{textDecoration: "none"}}><li className='epi'>Episodes</li></Link>  
            </ul>
            <ul className="buttons">
                <Link to="/read-selected" style={{textDecoration: "none"}}><li className='sel'>Selecionados</li></Link>
            </ul>
        </div>
    );
}