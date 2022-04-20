import {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from '../../components/Card'
import {HomeButton} from '../../components/HomeButton'
import './style.modules.css'

export function Characters() {
    
    const [characters, setCharacters] = useState([]);
    
    useEffect(()=>{

        async function fetchCharacters() {
            const response = await axios.get('https://rickandmortyapi.com/api/character')
            setCharacters(response.data.results)
        }
        fetchCharacters()
        
    },[])
    console.log(characters)
    return ( 
        <div className='charPage'>
        <HomeButton/>
        <h1 className='text'>Characters</h1>
        <div className="content-box">
        {
            characters.map((currentCharacter)=>{
                return (
                    
                    <Card character={currentCharacter} className="card"/>
                    
                );
            })
        }
        </div>
        </div>
    );
}

