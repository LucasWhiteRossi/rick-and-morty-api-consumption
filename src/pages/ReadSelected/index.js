import {useState, useEffect} from 'react'
import { HomeButton } from '../../components/HomeButton'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./style.modules.css"
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
        <div className="read-page">
        <HomeButton/>
        <div className="read-selected">
        
        {
            data.map((currentData)=>{
                return (
                    <div className="card text-white bg-dark mb-3" style={{maxWidth: "400px", maxHeight: "400px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={currentData.image} className="img-fluid rounded-start" alt={currentData.name}/>
                            </div>
                        </div>
                        <p>ID: {currentData._id}</p>
                        <h5 className="card-title"><strong>Nome: </strong>{currentData.nome}</h5>
                        <p className="card-text">Selecionado em: {currentData.access_time}</p>
                        { currentData.species && <p className="card-text"><strong>Espécie: </strong>{currentData.species}</p>}
                        { currentData.informacao && <p className="card-text"><strong>Comentário: </strong>{currentData.informacao}</p>}
                        <Link to = {`/character/${currentData._id}`}><button>Atualizar</button></Link><button onClick={()=>{deleteRegister(currentData._id)}}>Deletar</button>
                    </div>
                );
            })
        }
        </div>
        </div>
    );

}