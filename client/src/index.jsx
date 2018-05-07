import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      data: []
  	}

  }

  componentDidMount() {
    axios.get('/get').then(res => {
      this.setState({
        data: res.data.data.films.film
      })
    })
  }


  render () {
  	return (
    <div className="app">
      <div className="header">
        My challenge
      </div>
      <div className="wrapper">
        {
          this.state.data.map((movie, i) => {
            return (
              <div key={i} >
                <img className="movie" src={movie.images.image[0].src}/>
                {movie.title}
                </div>
              )
          })
        }
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));