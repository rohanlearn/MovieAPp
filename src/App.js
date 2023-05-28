import React,{ useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
import Loader from "./Loader";
const API_URL = 'https://www.omdbapi.com?apikey=a0978664'
const App = ()=>{
    const [movies,setMovies] = useState([])
    const [title,setTitle] = useState("")
    const [loader,setLoader] = useState(false)
    const searchMovies = async(title)=>{
        setTimeout(
            async()=>{
                const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        if (data.Search) {
            setLoader(false); // Call the setLoader function
            setMovies(data.Search); // Set the movies using the data.Search property
          }

            },700
        )
        

    }
    const searchBtnHandler = ()=>{
        setLoader(true)
        searchMovies(title)
        
    }
    const titleHandler = (e)=>{
        setTitle(e.target.value)
        

    }
    useEffect(()=>{
        

    },[])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={title}
                onChange={titleHandler}
                />
                 <img src={SearchIcon}s
                 alt="search"
                 onClick={searchBtnHandler}/>
                 
            </div>
                  {
                    loader && (
                        <div className="container">
                            <Loader/>
                            </div>

                    )
                  }
             
                {(!loader && movies.length>0) && (
                    <div className="container">

                {movies.map((movie)=>{

                    return(
                   
                        <MovieCard movie1={movie}/>
                     )
                })}
                </div>)}
                
            

           
           

        </div>
        
        
    );
}


export default App