import React, { Component } from "react";
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ClickItem from "./components/ClickItem"

const images = [
  {id: 1, url: "/images/Jerry_Smith.png"},
  {id: 2, url: "/images/Rick_Sanchez.png"},
  {id: 3, url: "/images/Beth_Smith.png"},
  {id: 4, url: "/images/Diane.jpg"},
  {id: 5, url: "/images/bird-person.png"},
  {id: 6, url: "/images/evilmorty.jpeg"},
  {id: 7, url: "/images/gianthead.png"},
  {id: 8, url: "/images/picklerick.png"},
  {id: 9, url: "/images/meeseeks.png"},
  {id: 10, url: "/images/morty.png"},
  {id: 11, url: "/images/goldenford.png"},
  {id: 12, url: "/images/Summer_is_cool.jpg"}
]

class App extends Component {
  
  state = {
    score: 0,
    topScore: 0,
    status: "start",
    clickedId: []
  };

  componentWillMount() {
    this.loadImages(images);
  };

  loadImages = (images) => {
      for (let i = images.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [images[i], images[j]] = [images[j], images[i]];
      }
  }

  handleClick = id => {
    let currentScore = this.state.score
    if (this.state.clickedId.indexOf(id) < 0) {
      this.state.clickedId.push(id)
      if (this.state.status === "start" || "end") {
      this.setState({status: ""})
      }
      currentScore = this.state.score + 1;
      this.setState({score: currentScore})
    }
    else {
      if (currentScore > this.state.topScore){
        this.setState({topScore: currentScore})
      }
      this.setState({
        score: 0,
        status: "end",
        clickedId: []
      })
    }
    this.loadImages(images)
  }

  render () {
    return (
    <div>
      <Nav score={this.state.score} topScore={this.state.topScore} status={this.state.status}/>
      <Header>
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </Header>
      <Container>
        {images.map(img => {
          return <ClickItem key={img.id} 
                            id={img.id} 
                            style={{backgroundImage: `url(${img.url})`}} 
                            onClick={() => this.handleClick(img.id)}
                            className={(this.state.status === "end") ? "click-item shake" : "click-item"}
          />
          })}
      </Container>
      <Footer>
        Clicky Game!
      </Footer>
    </div>
    )
  }
}

export default App;
