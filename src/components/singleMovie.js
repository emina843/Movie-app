import * as React from "react"
import MovieList from "../components/movieList"
import axios from "axios"
export default class IndexPage extends React.Component{
    constructor(props){
        super(props)
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);

    }

  handleClickAdd(){
    localStorage.setItem(this.props.movieData.id, JSON.stringify(this.props.movieData))
    alert('Added to favourites')
  }
  handleClickRemove(){
    localStorage.removeItem(this.props.movieData.id)
    alert('Removed from favourites')
    window.location.reload();
  }
  render(){
    const styles = {
        singleMovie: {
            height:300,
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${(this.props.movieData.poster_path)})`,
            backgroundPosition: 'center center', 
            backgroundRepeat:'no-repeat',
            backgroundSize:"cover",
            padding:"0rem",
        },
      };
    return(
            <div className="column is-2-desktop is-12-mobile singleMovie"  style={styles.singleMovie}>
                    <div className="columns is-multiline _inner">
                        <div className="column is-12">
                        <p className="movieTitle">{this.props.movieData.original_title}</p>
                        </div>
                        <div className="column is-12">
                        <p className="movieDate">Release date: {this.props.movieData.release_date}</p>
                        </div>
                        <div className="column is-12">
                        <p className="movieGrade">Vote: {this.props.movieData.vote_average}</p>
                        </div>
                        {this.props.favourites 
                        ?<div className="column is-12">
                        <button className="favouritesButton" onClick={this.handleClickRemove}>Remove from favourites</button>
                    </div>
                        : <div className="column is-12">
                        <button className="favouritesButton" onClick={this.handleClickAdd}>Add to favourites</button>
                    </div>
                        }
                       
                    </div>
                </div>

    )
  }
}

