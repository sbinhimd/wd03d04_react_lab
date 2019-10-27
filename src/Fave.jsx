import React, { Component } from "react";
import './index.css'

export default class Fave extends Component {

    constructor(props){
        super(props);
        this.state={
            isFave:false

        }
        
    }
    handleClick =(e)=>{
        e.stopPropagation()
            console.log("handling Fave click!");  
            this.setState({
                isFave: !this.state.isFave
            } )
            
        }
    
  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
    console.log(isFave);
    
    return (
        
        <div className={"film-row-fave " +isFave } onClick={this.handleClick}>
          <p className="material-icons">{isFave}</p>
        </div>
        
    );
  }
}