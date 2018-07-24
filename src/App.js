import React, { Component } from 'react';
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import './App.css';
import './form.css'
import './box.css'


function PostPic(event) {
  event.preventDefault()
  const request = new XMLHttpRequest();
  request.open("POST", `http://${window.location.hostname}:3000/products`);
  request.setRequestHeader("Content-type", "application/json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 201) {
      Post.call(this)
    }
  }
  const newPost = {
    id: Date.now().toString(),
    user: event.target.elements.user.value,
    image: event.target.elements.pic.value,
    description: event.target.elements.description.value,
  }
  request.send(JSON.stringify(newPost));
}

function Post() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      this.setState({ post: JSON.parse(xhttp.response) })
    }
  }
  xhttp.open("GET", `http://${window.location.hostname}:3000/products`, true);
  xhttp.send();
}

function renderPost(post) {
  let PostTest = []

  for (let key in post) {
    PostTest[key] = <Card
      pic={post[key].image}
      description={post[key].description}
      user={post[key].user}
    />
  }
  return PostTest
}


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      post: []
    };
  }

  componentDidMount() {
    Post.call(this)
  }

  state = { selectedFile: null }


  render() {
    return (
      <div>
        <Header />
          <form onSubmit={PostPic.bind(this)} className="adjust">
            UserName: <input type="text" name="user" className='box'/>
            Pic: <input type="text" name='pic' className='box'/>
            Description: <input type="text" name="description"/>
            <input type="submit" value="Post"/>
          </form>
             {renderPost(this.state.post)}
        
        
      </div>
    );
  }
}

export default App;


