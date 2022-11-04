import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    const dispatch = useDispatch();
    const params=useParams();
    
    useEffect(()=>{
        console.log('loading detail page')
    }, [params.id])

    return (
        <>
            <h1> Movie Details</h1>
        </>
    )
}

export default MovieDetails;