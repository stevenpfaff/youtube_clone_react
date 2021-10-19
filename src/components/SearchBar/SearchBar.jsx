import React, { Component } from 'react'

class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            search: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSearchSubmit(this.state.search);
    }
    

    render() {
        return(
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <div className ="field">
                        <label>Search</label>
                        <input value={this.state.search}onChange={this.handleChange} name="video-search" type="text" placeholder="Search YouTube"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;



