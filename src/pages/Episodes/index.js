import { EpisodeCard } from '../../components/EpisodeCard' 
import './style.modules.css'
import {useState, useEffect} from 'react';
import axios from 'axios';


export function Episodes() {
    
    const [episodes, setEpisodes] = useState([]);
    
    useEffect(()=>{

        async function fetchEpisode() {
            const response = await axios.get('https://rickandmortyapi.com/api/episode')
            setEpisodes(response.data.results)
        }
        fetchEpisode()
        console.log(episodes)
    },[])
    
    return ( 
        <><h1 style={{textAlign:"center"}}>Episodes</h1>
        <div className="content-box">

        {
            episodes.map((currentEpisode)=>{
                return (
                    <EpisodeCard episode={currentEpisode}/>
                );
            })
        }
        </div>
        </>
    );
}

