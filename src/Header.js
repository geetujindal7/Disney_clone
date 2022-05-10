import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded';
import { authe } from './firebase';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Header = (props) => {

        const handleAuth = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(authe, provider).then((re) => {
                console.log(re)
            }).catch((err) =>
            {
                console.log(err)
            })
        }

    return (
        <nav className='nNav'>
            <img className='logo_disneys' src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/logo.svg" alt="" />
            <div className='navMenu'>
                <a href="/home">
                    <HomeIcon />
                    <span>HOME</span>
                </a>
                <a href="/home">
                    <SearchIcon />
                    <span>SEARCH</span>
                </a>
                <a href="/home">
                    <AddIcon />
                    <span>WATCHLIST</span>
                </a>
                <a href="/home">
                    <StarIcon />
                    <span>ORIGINALS</span>
                </a>
                <a href="/home">
                    <MovieFilterIcon />
                    <span>MOVIES</span>
                </a>
                <a href="/home">
                    <LocalMoviesRoundedIcon />
                    <span>SERIES</span>
                </a>
            </div>
            <button className='login_button' onClick={handleAuth}>Login</button>
        </nav>
    )
}

export default Header