import axios from 'axios';

export function LocationCard (props){

    function handleClick(){
        
        axios.post(
            'https://ironrest.herokuapp.com/rickandmortyapi',
            {nome:props.location.name,
            type:props.location.type,
            access_time: `${new Date()}`
            })
        }

    return (
        <>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{props.location.name}</h5>
        <p className="card-text">{`Este local é do tipo: ${props.location.type}`}</p>
        <button type="button" class="btn btn-primary" onClick={handleClick}>Selecionar</button>
        </div>
    </div>
    </div>
    </div>
    </>
    );
}