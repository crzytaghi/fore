class App extends React.Component {
  state = {
    golf: []
  }

// ===== MAKE A GET REQUEST TO RETRIEVE THE DATA ====== //
  componentDidMount = () => {
    axios.get('/scorecards').then(
      (response) => {
        this.setState({
          golf:response.data
        })
        console.log(this.state.golf);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

// ========== CREATE A NEW SCORECARD ========== //
  createScorecard = (event) => {
    event.preventDefault();
    axios.post('/scorecards').then(
      (response) => {
        this.setState({
          date:this.state.newDate,
          course:this.state.newCourse,
          teebox:this.state.newTeebox,
          hole:this.state.newHole,
          par:this.state.newPar,
          score:this.state.newScore
        })
      }
    )
  }

  newDate = (event) => {
    this.setState({
      date:event.target.value
    })
  }

  newCourse = (event) => {
    this.setState({
      course:event.target.value
    })
  }

  newTeebox = (event) => {
    this.setState({
      teebox:event.target.value
    })
  }

  newHole = (event) => {
    this.setState({
      hole:event.target.value
    })
  }

  newPar = (event) => {
    this.setState({
      par:event.target.value
    })
  }

  newScore = (event) => {
    this.setState({
      score:event.target.value
    })
  }

  render = () => {
    return (
      <div className="container">
        <h2>Scorecard</h2>
        <form>
          <input type="date"/><br/>
          <input type="text" placeholder="Course Name"/><br/>
          <input type="text" placeholder="Teebox"/><br/>
          <input type="number" placeholder="Hole Number"/><br/>
          <input type="number" placeholder="Par"/><br/>
          <input type="number" placeholder="Score"/><br/>
          <input type="submit" value="Submit"/>
        </form>
        <div className="table">
          {this.state.golf.map((scorecard,index) => {
            return (
              <table>
                <thead>
                  <tr>
                    <th colspan="19">Date: {scorecard.day}</th>
                  </tr>
                  <tr>
                    <th colspan="19">Course:{ scorecard.course}</th>
                  </tr>
                  <tr>
                    <th colspan="19">Teebox: {scorecard.teebox}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Hole</th>
                    {scorecard.hole.map((hole,index) => {
                      return <th>{hole}</th>
                    })}
                  </tr>
                  <tr>
                    <th>Par</th>
                    {scorecard.par.map((par,index) => {
                      return <th>{par}</th>
                    })}
                  </tr>
                  <tr>
                    <th>Score</th>
                    {scorecard.score.map((score,index) => {
                      return <th>{score}</th>
                    })}
                  </tr>
                </tbody>
              </table>
            )
          })}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
);
