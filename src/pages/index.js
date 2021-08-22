import * as React from "react"
import axios from "axios"
import "../scss/main.scss"
import MovieList from "../components/movieList"
import GenresDropdown from "../components/genresDropdown"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
export default class IndexPage extends React.Component{
  
  state = {
    movieList : [],
    genres:[],
    loading: true,
    favourites: [],
    startDate: new Date()

}
  componentDidMount(){
    const api = process.env.API_KEY;
    this.getPopularMovies()
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US`).then(res=>{
      const genres = res.data.genres;
      this.setState({genres:genres, loading:false},
          function(){
              //console.log(this.state.genres)
          })
      })
     
  }
  getPopularMovies(){
    const api = process.env.API_KEY;
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`).then(res=>{
      const movieList = res.data.results;
      this.setState({movieList:movieList, loading:false},
          function(){
              //console.log(this.state.movieList)
          })
      })
  }
  handleClickSortGenre =(event) =>{
    const api = process.env.API_KEY;
    const genreID = event.target.getAttribute("value");
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=${genreID}`).then(res=>{
      const movieList = res.data.results;
      this.setState({movieList:movieList, loading:false},
        function(){
            //console.log(this.state.movieList)
        })
      })
}
handleClickPickYear =(date) =>{
  const api = process.env.API_KEY;
  const year = (new Date(date)).getFullYear();
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&primary_release_year=${year}`).then(res=>{
    const movieList = res.data.results;
    this.setState({movieList:movieList, loading:false},
      function(){
          //console.log(this.state.movieList)
      })
    })
}
  searchMovies = (event) => {
    const api = process.env.API_KEY;
  const searchValue = event.target.value;
  if(event.target.value.length>0){
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${searchValue}`).then(res=>{
      const movieList = res.data.results;
      this.setState({movieList:movieList, loading:false},
          function(){
              //console.log(this.state.movieList)
          })
      })
  }
  else{
    this.getPopularMovies()
  }
  }
  handleDateChange = (date)=>{
    this.setState({startDate:date})
    this.handleClickPickYear(date)
  }
  render(){
    return(
<>
<div className="section">
  <div className="container">
    <div className="columns is-multiline">
      <div className="column is-8">
        <input type="text" placeholder="Type to search" onChange={this.searchMovies}/>
      </div>
      <div className="column is-2 has-text-right">
        <GenresDropdown genres={this.state.genres} handleClickSortGenre={this.handleClickSortGenre}></GenresDropdown>
      </div>
     <div className="column is-2">
     <DatePicker
      showYearPicker
      dateFormat="yyyy"
      selected={this.state.startDate}
      onChange={this.handleDateChange}
    />
     </div>
      
    </div>
  </div>
</div>

<div className="section moviesListSection">
  <div className="container">
    <div className="columns">
      <div className="column is-9">
      <p className="heading">Discover movies:</p>
      </div>
      <div className="column is-3 has-text-right">
        <a className="seeFavouritesButton" href="/favourites">See your favourites</a>
      </div>
    </div>
    <div className="columns moviesList is-multiline">
      <MovieList movies = {this.state.movieList} favourites={false}></MovieList>
    </div>
  </div>
</div>


</>
    )
  }
}

