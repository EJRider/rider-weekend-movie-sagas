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
        dispatch({
            type: 'GET_TARGET_MOVIE',
            payload: params.id
        });
    }, [params.id])

    return (
        <>
            <h1> Movie Details</h1>
            <button onClick={()=>history.push('/')}>Back to Movie List</button>
        </>
    )
}

export default MovieDetails;