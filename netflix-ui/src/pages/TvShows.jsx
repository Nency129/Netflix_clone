import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SelectGenre from '../components/SelectGenre';

export default function TvShows() {
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
     const genres = useSelector((state) => state.netflix.genres);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded)
            dispatch(fetchMovies({ type: "tv" }));
    },[]);

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        // if(currentUser)navigate("/login");
      });

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled}/>
            </div>
           
            <div className="data">
                 <SelectGenre genres={genres} type="tv"/>
                 {
                    movies.length? <Slider movies={movies}/> : <NotAvailable/>
                }
            </div>
        </Container>
    );
}

const Container = styled.div`
.data{
    margin-top:8rem;
    .not-available{
        text-align:Center;
        color:white;
        margin-top:4rem;
    }
}
`;
