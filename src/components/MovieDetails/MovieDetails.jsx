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
            {activeMovie[0] && <img src={activeMovie[0].poster}/>}
            {activeMovie[0]&& <h2>Title: {activeMovie[0].title}</h2>}
            {/*  {gif.catergory_id && <p>GIF category: {category[gif.catergory_id]}</p>}*/}
            <h2>Genres: </h2>
            <ul>
                {activeMovie.map(movie=>(
                    <li key={movie.name}>{movie.name}</li>
                ))}
            </ul>
            <h2>Description</h2>
            {activeMovie[0] && <p>{activeMovie[0].description}</p>}
            <button onClick={()=>history.push('/')}>Back to Movie List</button>
        </>
    )
}

export default MovieDetails;