import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export function UpdateSelected(props) {
    
    const navigate = useNavigate()
    const params = useParams()

    const [data, setData] = useState({})
    const [form, setForm] = useState({
        informacao: ""
    });

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(
                `https://ironrest.herokuapp.com/rickandmortyapi/${params.selected_id}`
                )
            setData(response.data)
        }
        fetchData()
    },[])


    function handleChange(event){
        setForm( { ...form, [event.target.name]: event.target.value } );
        
        console.log(form);
    }
    
    function handleConfirm() {
        
        async function updateRegister(){
            const editedData = {...data}
            delete editedData._id
            
            await axios.put(
                `https://ironrest.herokuapp.com/rickandmortyapi/${params.selected_id}`,
                {...editedData, informacao:form.informacao}
            )
            setData({...data, informacao:form.informacao})
        }
        updateRegister()
        navigate('/read-selected')
    }
    return (
        <>
        <p>ID: {data._id}</p>
        <p><strong>Nome: </strong>{data.nome}</p>
        <p>Selecionado em: {data.access_time}</p>
        { data.species && <p>{data.species}</p>}
        { data.informacao && <p>{data.informacao}</p>}
        <label>Coloque seu comentário: </label>
        <input
        name= "informacao"
        onChange={handleChange}
        value={form.informacao}
        placeholder="Inserir comentário"
        />
        
        <button onClick={handleConfirm}>Confirmar</button>
        </>
    )
}







