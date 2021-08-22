import * as React from "react"
import axios from "axios"
import "../scss/main.scss"
import MovieList from "../components/movieList"
export default class IndexPage extends React.Component{
  state = {
    movieList : [],
    genres:[],
    loading: true,
    favourites: [],
}
  componentDidMount(){
    //localStorage.clear()
    var keys = Object.keys(localStorage)
    var max = keys.length;
    var movies = []
    for(var i = 0; i<max; i++){
        var movie = JSON.parse(localStorage.getItem(keys[i]));
        movies.push(movie);
    }
   this.setState({movieList:movies})
  }
  render(){
    return(
<>
<div className="section">
    <div className="container">
        <div className="columns">
            <div className="column">
                <a className="backButton" href="/">Back to movies</a>
            </div>
        </div>
    </div>
</div>

<div className="section favouriteMoviesListSection">
  <div className="container">
  <div className="columns">
      <div className="column is-9">
      <p className="heading">Your favourite movies:</p>
      </div>
    
    </div>
    <div className="columns moviesList">
      <MovieList movies = {this.state.movieList} favourites={true}></MovieList>
    </div>
  </div>
</div>
</>
    )
  }
}

