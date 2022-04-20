import axios from 'axios';

export function EpisodeCard (props){

    function handleClick(){
        
        axios.post(
            'https://ironrest.herokuapp.com/rickandmortyapi',
            {nome:props.episode.name,
            created:props.episode.created,
            access_time: `${new Date()}`
            })
        }

    return (
        <>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{props.episode.name}</h5>
        <p className="card-text">{`Este episódio foi criado em: ${props.episode.created}`}</p>
        <button type="button" class="btn btn-primary" onClick={handleClick}>Selecionar</button>
        </div>
    </div>
    </div>
    </div>
    </>
    );
}