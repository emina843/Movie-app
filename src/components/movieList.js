import * as React from "react"
import MovieList from "../components/movieList"
import SingleMovie from "../components/singleMovie"
import axios from "axios"
export default class IndexPage extends React.Component{
    constructor(props){
        super(props)
        
    }
  componentDidMount(){
    
  }
  render(){
    return(
<>
{
this.props.movies.length==0
?<div className="column is-12"><p className="emptyFavourites">Your list of favourite movies is empty. Go back to add movies to your list. </p></div>
:<></>
}

{this.props.movies.map((movie) => (
    <SingleMovie movieData={movie} favourites={this.props.favourites}></SingleMovie>
))}
      
</>
    )
  }
}

