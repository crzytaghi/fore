class App extends React.Component {
  state = {
    golf: []
  }

// ===== MAKE A GET REQUEST TO RETRIEVE THE DATA =====
  componentDidMount = () => {
    axios.get('/fore').then(
      (response) => {
        console.log(response);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  render = () => {
    return (
      <h1>Hello</h1>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
);
