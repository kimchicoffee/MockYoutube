class Search extends React.Component{

  constructor(){
    super()
    this.state = { value: "Search"}
  }

  handleChange(event) {
    this.setState({
      {value: event.target.value}
    })
  }

  //A controlled <input> has a value prop. Rendering a controlled <input> will reflect the value of the value prop.
  render(){
    return(
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
          <button className="btn hidden-sm-down">
            <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>)
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
