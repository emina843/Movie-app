import * as React from "react"
import axios from "axios"
import "../scss/main.scss"
import MovieList from "../components/movieList"
export default class IndexPage extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        event.target.closest('.dropdown').classList.toggle('is-active')
    }
  render(){
    return(
<>
<div class="dropdown">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick = {this.handleClick}>
      <span>Select Genre</span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">

    {this.props.genres.map((genre) => (
        <a class="dropdown-item" value={genre.id} onClick={this.props.handleClickSortGenre}>{genre.name}</a>
      ))}

    </div>
  </div>
</div>
</>
    )
  }
}

