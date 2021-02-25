import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.fetchDogImg = this.fetchDogImg.bind(this);
    this.saveDataImg = this.saveDataImg.bind(this);

  }

  componentDidMount() {
    this.fetchDogImg();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) return false;
    return true;
  }

  componentDidUpdate() {
    if (localStorage.dogURL) {
      const parseStorage = JSON.parse(localStorage.dogURL);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      return this.setState({ data: { message: lastDog } });
    }
    this.fetchDogImg();
  }

  fetchDogImg() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  saveDataImg() {
    const { data: { message }, name, array } = this.state;
    const imgData = { message, name };
    const newArray = [...array, imgData];
    this.setState({ array: newArray });
    this.setState({ name: "" });
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <h1>Random Dogs</h1>
        <div>
          <img src={ this.state.data.message } />
        </div>
        <button onClick={ this.fetchDogImg }>New Dog</button>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="name for dog"
          />
          <button onClick={this.saveData}>Save IMage</button>
        </div>
      </div>
    );
  }
}

export default App;