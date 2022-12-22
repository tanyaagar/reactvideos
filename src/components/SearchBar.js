import React from "react";

class SearchBar extends React.Component{
    state = {term: ''}
    onInputChange = (event)=>{
        this.setState({term: event.target.value});
    };
    onFromSubmit = event =>{
        event.preventDefault();
        this.props.onFromSubmit(this.state.term);
    }
    render(){
        return (<div className="searchbar ui segment">
            <form onSubmit={this.onFromSubmit} className="ui form">
                <div className="field">
                    <lable>Video Search</lable>
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                </div>
            </form>
        </div>);
    }
}
export default SearchBar;