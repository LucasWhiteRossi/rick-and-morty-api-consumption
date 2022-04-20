import {useState, useEffect} from 'react'
import { HomeButton } from '../../components/HomeButton'
import { Link } from 'react-router-dom'
import axios from 'axios'
export function ReadSelected(){
    
    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(
                'https://ironrest.herokuapp.com/rickandmortyapi'
                )
            setData(response.data)
        }
        fetchData()
    },[])
    
    async function deleteRegister(id){
        await axios.delete(
            `https://ironrest.herokuapp.com/rickandmortyapi/${id}`
        )
        setData(data.filter((element)=>{return element._id!==id}))
    }

    return (
        <>
        <HomeButton/>
        {
            data.map((currentData)=>{
                return (
                    <div>
                        <p>ID: {currentData._id}</p>
                        <p><strong>Nome: </strong>{currentData.nome}</p>
                        <p>Selecionado em: {currentData.access_time}</p>
                        { currentData.species && <p>{currentData.species}</p>}
                        <Link to = {`/character/${currentData._id}`}><button>Atualizar</button></Link><button onClick={()=>{deleteRegister(currentData._id)}}>Deletar</button>
                    </div>
                );
            })
        }
        </>
    );

}