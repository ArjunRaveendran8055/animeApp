import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      filteredImages:[],
      images: []
    };
  }
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      //console.log("response", res.data.results); //this is the response object that contains all the info we need to display
      const data=res.data.results
      //console.log("data is",data)
      this.setState({filteredImages:data})
      this.setState({ images: data });
    });
  }

  render() {

    const inputChangeHandler=(e)=>{
        this.setState({filteredImages:this.state.images.filter((item)=>{
          if(item.name.includes(e.target.value)){
            return item
          }
          console.log(this.state.filteredImages)
        })})
    }
  
    return (
      <div className="main-container">
      <div className="search-container">
      <input type="text" className="searchbar" placeholder="Search Pokemon...." onChange={inputChangeHandler}/>
      </div>
        <div className="grid-container">
          {this.state.filteredImages.map((item,index)=>{
            return(
              <div className="card" key={index}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index+1  }.png`} />
              <p className="pokename">{item.name}</p>
              </div>)
          })}
        </div>
      </div>
    );
  }
}

export default App;
