import { LocationCard } from '../../components/LocationCard'
import { HomeButton } from '../../components/HomeButton'
import './style.modules.css'
import {useState, useEffect} from 'react';
import axios from 'axios';


export function Locations() {
    
    const [locations, setLocations] = useState([]);
    
    useEffect(()=>{

        async function fetchLocation() {
            const response = await axios.get('https://rickandmortyapi.com/api/location')
            setLocations(response.data.results)
        }
        fetchLocation()
        console.log(locations)
    },[locations])
    
    return ( 
        <div className='locPage'>
        < HomeButton />
        <h1 style={{textAlign:"center"}}>Locations</h1>
        <div className="content-box">

        {
            locations.map((currentLocation)=>{
                return (
                    <LocationCard location={currentLocation}/>
                );
            })
        }
        </div>
        </div>
    );
}

