import axios from 'axios';
import {Link} from 'react-router-dom'

export function Card (props){

    function handleClick(){
        
        axios.post(
            'https://ironrest.herokuapp.com/rickandmortyapi',
            {nome:props.character.name,
            species:props.character.species,
            access_time: `${Date.now()}`
            })
        }
    

    return (
        <>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.character.image} className="img-fluid rounded-start" alt={props.character.name}/>
                </div>
            <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        <p className="card-text">{`Este personagem é da espécie: ${props.character.species}`}</p>
        <Link to={`/character/${props.character.id}`}><button type="button" class="btn btn-primary" onClick={handleClick}>Selecionar</button></Link>
        </div>
    </div>
    </div>
    </div>
    </>
    );
}