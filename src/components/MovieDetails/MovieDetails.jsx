import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    const dispatch = useDispatch();
    const params=useParams();
    const history = useHistory();
    const activeMovie = useSelector(store => store.activeMovie);

    console.log('active movie is', activeMovie);

    useEffect(()=>{
        console.log('loading detail page')
        //Calls a dispatch to index.js to run a get request to the database
        dispatch({
            type: 'GET_TARGET_MOVIE',
            payload: params.id
        });
    }, [params.id])

    return (
        <>
            <h1> Movie Details</h1>
            {activeMovie && <img src={activeMovie.poster}/>}
            {activeMovie&& <h2>Title: {activeMovie.title}</h2>}
            <h2>Genres: </h2>
            <ul>
                {activeMovie && activeMovie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
            <h2>Description</h2>
            {activeMovie && <p>{activeMovie.description}</p>}
            <button onClick={()=>history.push('/')}>Back to Movie List</button>
        </>
    )
}

export default MovieDetails;