import * as React from "react"
import axios from "axios"
export default class IndexPage extends React.Component{
    constructor(props){
        super(props)
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }
    state={
        id : '',
    }
  componentDidMount(){
    //console.log(this.props.movieData)
  }
  handleClick(event){
      console.log(this.props)
}
  render(){
    return(
            <button onClick={this.handleClickAdd}>Add to favourites</button>
    )
  }
}

