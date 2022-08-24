import React from "react";
import CardList from "./CardList";
import { setSearchField } from "./Actions/action";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

import {connect} from "react-redux"
const mapStateToProps=(state)=>{
  return{
    searchField:state.searchRobots
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    //onRequestRobots: () => dispatch(requestRobots())
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    
    };
  }
  componentDidMount() {
    //console.log(this.props.store.getState())
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  

  render() {
    const {robots} =this.state
    const {  searchField, onSearchChange } = this.props;
    console.log(this.props)

   /* const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })*/
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="container">
          <div className="header-div">
            <h1>ROBO FRIENDS</h1>
            <SearchBox
              className="search-box"
              searchChange={onSearchChange}
            />
          </div>
          <Scroll>
            <CardList robots={robots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
