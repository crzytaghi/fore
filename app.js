
let listItem = '';

class App extends React.Component {
  state = {
    hole1:1, hole2:2, hole3:3, hole4:4, hole5:5, hole6:6, hole7:7, hole8:8, hole9:9, hole10:10, hole11:11, hole12:12, hole13:13, hole14:14, hole15:15, hole16:16, hole17:17, hole18:18,
    par1:5, par2:3, par3:5, par4:4, par5:4, par6:4, par7:3, par8:5, par9:3, par10:4, par11:4, par12:4, par13:4, par14:5, par15:3, par16:5, par17:4, par18:4,
    score1:5, score2:3, score3:5, score4:4, score5:4, score6:4, score7:3, score8:5, score9:3, score10:4, score11:4, score12:4, score13:4, score14:5, score15:3, score16:5, score17:4, score18:4,
    golf: [],
    show:false,
    editScore:false
  }

  toggleShow = () => {
    this.setState({
      show:!this.state.show
    })
  }

  toggleScore = () => {
    this.setState({
      editScore:!this.state.editScore
    })
  }

// ===== MAKE A GET REQUEST TO RETRIEVE THE DATA ====== //
  componentDidMount = () => {
    axios.get('/scorecards').then(
      (response) => {
        this.setState({
          golf:response.data
        })
        // console.log(this.state.golf);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

// ========== CREATE A NEW SCORECARD ========== //
  createScorecard = (event) => {
    console.log(this.state);
    // event.preventDefault();
    axios.post(
      '/scorecards',
      {
          date:this.state.newDate,
          course:this.state.newCourse,
          teebox:this.state.newTeebox,

          hole1:1, hole2:2, hole3:3, hole4:4, hole5:5, hole6:6, hole7:7, hole8:8, hole9:9, hole10:10, hole11:11, hole12:12, hole13:13, hole14:14, hole15:15, hole16:16, hole17:17, hole18:18,

          par1:5, par2:3, par3:5, par4:4, par5:4, par6:4, par7:3, par8:5, par9:3, par10:4, par11:4, par12:4, par13:4, par14:5, par15:3, par16:5, par17:4, par18:4,

          score1:5, score2:3, score3:5, score4:4, score5:4, score6:4, score7:3, score8:5, score9:3, score10:4, score11:4, score12:4, score13:4, score14:5, score15:3, score16:5, score17:4, score18:4
      }
    ).then(
      (response) => {
        this.setState({
          golf:response.data
        })
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  newDate = (event) => {
    // console.log(event.target.value);
    this.setState({
      newDate:event.target.value
    })
  }

  newCourse = (event) => {
    // console.log(event.target.value);
    this.setState({
      newCourse:event.target.value
    })
  }

  newTeebox = (event) => {
    // console.log(event.target.value);
    this.setState({
      newTeebox:event.target.value
    })
  }

// ========== DELETE ========== //
  deleteScore = (event) => {
    // event.preventDefault();
    axios.delete('/scorecards/' + event.target.value).then(
      (response) => {
        this.setState({
          golf:response.data
        })
      }
    )
  }

  render = () => {
    return (
      <div className="container">
        <div className="navbar">
          <h1>Fore!</h1>
          <button onClick={this.toggleShow}>Add Score</button>
        </div>
        <div className="body">
          <div className="form">
            {(this.state.show) ?
              <div className="form-body">
                <h2>Create New!</h2>
                <form onSubmit={this.createScorecard}>
                  <input onChange={this.newDate} type="date"/><br/>
                  <input onChange={this.newCourse} type="text" placeholder="Course Name"/><br/>
                  <input onChange={this.newTeebox} type="text" placeholder="Teebox"/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </div>
              :
              <div className="form-text">
                <h2>Click Add Score to Create a Scorecard</h2>
              </div>
            }
          </div>

          <div className="table">
            <h1>Scorecards</h1>
            {this.state.golf.map((scorecard,index) => {
              return (
                  <table key={index}>
                    <thead>
                      <tr>
                        <th colSpan="19">Date: {scorecard.date}</th>
                      </tr>
                      <tr>
                        <th colSpan="19">Course:{scorecard.course}</th>
                      </tr>
                      <tr>
                        <th colSpan="19">Teebox: {scorecard.teebox}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Hole</th>
                        <th>{scorecard.hole1}</th><th>{scorecard.hole2}</th><th>{scorecard.hole3}</th><th>{scorecard.hole4}</th><th>{scorecard.hole5}</th><th>{scorecard.hole6}</th><th>{scorecard.hole7}</th>
                          <th>{scorecard.hole8}</th><th>{scorecard.hole9}</th><th>{scorecard.hole10}</th><th>{scorecard.hole11}</th><th>{scorecard.hole12}</th><th>{scorecard.hole13}</th>
                          <th>{scorecard.hole14}</th><th>{scorecard.hole15}</th><th>{scorecard.hole16}</th><th>{scorecard.hole17}</th><th>{scorecard.hole18}</th>
                      </tr>
                      <Par index={scorecard}></Par>

                      <Score index={scorecard}></Score>
                      <tr>
                        <th colSpan="19"><button value={scorecard.id} onClick={this.deleteScore} className="delete">DELETE</button></th>
                      </tr>
                    </tbody>
                  </table>
                  )
                }
              )
            }
          </div>
        </div>
        <div className="footer">
          <div className="footer-text">
            <h2>Copyright</h2>
          </div>
          <div className="footer-links">
            <a href="https://github.com/crzytaghi/fore">
              <i className="fa fa-github" style={{fontSize:"48px",color:"black"}}></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

class Par extends React.Component{

  state = {
    show: false
  }

  toggleShow = () => {
    this.setState({
      show:!this.state.show
    })
  }

  change1 = (event) => {
    console.log('change1: ' + event.target.value);
    this.setState({
      change1:event.target.value
    })
  }
  change2 = (event) => {
    this.setState({
      change2:event.target.value
    })
  }
  change3 = (event) => {
    this.setState({
      change3:event.target.value
    })
  }
  change4 = (event) => {
    this.setState({
      change4:event.target.value
    })
  }
  change5 = (event) => {
    this.setState({
      change5:event.target.value
    })
  }
  change6 = (event) => {
    this.setState({
      change6:event.target.value
    })
  }
  change7 = (event) => {
    this.setState({
      change7:event.target.value
    })
  }
  change8 = (event) => {
    this.setState({
      change8:event.target.value
    })
  }
  change9 = (event) => {
    this.setState({
      change9:event.target.value
    })
  }
  change10 = (event) => {
    this.setState({
      change10:event.target.value
    })
  }
  change11 = (event) => {
    this.setState({
      change11:event.target.value
    })
  }
  change12 = (event) => {
    this.setState({
      change12:event.target.value
    })
  }
  change13 = (event) => {
    this.setState({
      change13:event.target.value
    })
  }
  change14 = (event) => {
    this.setState({
      change14:event.target.value
    })
  }
  change15 = (event) => {
    this.setState({
      change15:event.target.value
    })
  }
  change16 = (event) => {
    this.setState({
      change16:event.target.value
    })
  }
  change17 = (event) => {
    this.setState({
      change17:event.target.value
    })
  }
  change18 = (event) => {
    this.setState({
      change18:event.target.value
    })
  }

  updatePar = (event) => {
    const { index } = this.props
    // event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
      '/scorecards/' + id,
      {
        date:index.date,
        course:index.course,
        teebox:index.teebox,

        hole1:1, hole2:2, hole3:3, hole4:4, hole5:5, hole6:6, hole7:7, hole8:8, hole9:9, hole10:10, hole11:11, hole12:12, hole13:13, hole14:14, hole15:15, hole16:16, hole17:17, hole18:18,

        par1:this.state.change1, par2:this.state.change2, par3:this.state.change3, par4:this.state.change4, par5:this.state.change5, par6:this.state.change6, par7:this.state.change7,
          par8:this.state.change8, par9:this.state.change9, par10:this.state.change10, par11:this.state.change11, par12:this.state.change12, par13:this.state.change13, par14:this.state.change14,
          par15:this.state.change15, par16:this.state.change16, par17:this.state.change17, par18:this.state.change18,

        score1:index.score1, score2:index.score2, score3:index.score3, score4:index.score4, score5:index.score5, score6:index.score6, score7:index.score7,
          score8:index.score8,score9:index.score9, score10:index.score10, score11:index.score11, score12:index.score12, score13:index.score13, score14:index.score14, score15:index.score15, score16:index.score16, score17:index.score17, score18:index.score18
      }
    ).then(
      (response) => {
        console.log(response.data);
        this.setState({
          golf:response.data
        })
        console.log(this.state.golf);
      }
    )
    console.log(this.state);
    console.log(event.target.getAttribute('id'));
  }

  render = () => {
    const { index } = this.props
    return (
      <React.Fragment>
      {(this.state.show) ? (
        <tr>
          <th>Par</th>
          <th colSpan="19">
            <form id={index.id} onSubmit={this.updatePar}>
              <input type="number" onKeyUp={this.change1} placeholder="Hole #1"/>
              <input type="number" onKeyUp={this.change2} placeholder="Hole #2"/>
              <input type="number" onKeyUp={this.change3} placeholder="Hole #3"/>
              <input type="number" onKeyUp={this.change4} placeholder="Hole #4"/>
              <input type="number" onKeyUp={this.change5} placeholder="Hole #5"/>
              <input type="number" onKeyUp={this.change6} placeholder="Hole #6"/>
              <input type="number" onKeyUp={this.change7} placeholder="Hole #7"/>
              <input type="number" onKeyUp={this.change8} placeholder="Hole #8"/>
              <input type="number" onKeyUp={this.change9} placeholder="Hole #9"/>
              <input type="number" onKeyUp={this.change10} placeholder="Hole #10"/>
              <input type="number" onKeyUp={this.change11} placeholder="Hole #11"/>
              <input type="number" onKeyUp={this.change12} placeholder="Hole #12"/>
              <input type="number" onKeyUp={this.change13} placeholder="Hole #13"/>
              <input type="number" onKeyUp={this.change14} placeholder="Hole #14"/>
              <input type="number" onKeyUp={this.change15} placeholder="Hole #15"/>
              <input type="number" onKeyUp={this.change16} placeholder="Hole #16"/>
              <input type="number" onKeyUp={this.change17} placeholder="Hole #17"/>
              <input type="number" onKeyUp={this.change18} placeholder="Hole #18"/>
              <input type="submit"/>
            </form>
          </th>
        </tr> )
        : (
        <tr>
          <th>Par</th>
          <th>{index.par1}</th><th>{index.par2}</th><th>{index.par3}</th><th>{index.par4}</th><th>{index.par5}</th><th>{index.par6}</th>
          <th>{index.par7}</th><th>{index.par8}</th><th>{index.par9}</th><th>{index.par10}</th><th>{index.par11}</th><th>{index.par12}</th>
          <th>{index.par13}</th><th>{index.par14}</th><th>{index.par15}</th><th>{index.par16}</th><th>{index.par17}</th><th>{index.par18}</th>
        </tr> )
      }
        <tr>
          <th colSpan="19"><button onClick={this.toggleShow}>EDIT PAR</button></th>
        </tr>
      </React.Fragment>
    )
  }
}

class Score extends React.Component{

  state = {
    show: false
  }

  toggleShow = () => {
    this.setState({
      show:!this.state.show
    })
  }

  change1 = (event) => {
    console.log('change1: ' + event.target.value);
    this.setState({
      change1:event.target.value
    })
  }
  change2 = (event) => {
    this.setState({
      change2:event.target.value
    })
  }
  change3 = (event) => {
    this.setState({
      change3:event.target.value
    })
  }
  change4 = (event) => {
    this.setState({
      change4:event.target.value
    })
  }
  change5 = (event) => {
    this.setState({
      change5:event.target.value
    })
  }
  change6 = (event) => {
    this.setState({
      change6:event.target.value
    })
  }
  change7 = (event) => {
    this.setState({
      change7:event.target.value
    })
  }
  change8 = (event) => {
    this.setState({
      change8:event.target.value
    })
  }
  change9 = (event) => {
    this.setState({
      change9:event.target.value
    })
  }
  change10 = (event) => {
    this.setState({
      change10:event.target.value
    })
  }
  change11 = (event) => {
    this.setState({
      change11:event.target.value
    })
  }
  change12 = (event) => {
    this.setState({
      change12:event.target.value
    })
  }
  change13 = (event) => {
    this.setState({
      change13:event.target.value
    })
  }
  change14 = (event) => {
    this.setState({
      change14:event.target.value
    })
  }
  change15 = (event) => {
    this.setState({
      change15:event.target.value
    })
  }
  change16 = (event) => {
    this.setState({
      change16:event.target.value
    })
  }
  change17 = (event) => {
    this.setState({
      change17:event.target.value
    })
  }
  change18 = (event) => {
    this.setState({
      change18:event.target.value
    })
  }

  updateScore = (event) => {
    const { index } = this.props
    // event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
      '/scorecards/' + id,
      {
        date:index.date,
        course:index.course,
        teebox:index.teebox,

        hole1:1, hole2:2, hole3:3, hole4:4, hole5:5, hole6:6, hole7:7, hole8:8, hole9:9, hole10:10, hole11:11, hole12:12, hole13:13, hole14:14, hole15:15, hole16:16, hole17:17, hole18:18,

        par1:index.par1, par2:index.par2, par3:index.par3, par4:index.par4, par5:index.par5, par6:index.par6, par7:index.par7,
          par8:index.par8,par9:index.par9, par10:index.par10, par11:index.par11, par12:index.par12, par13:index.par13, par14:index.par14, par15:index.par15, par16:index.par16, par17:index.par17, par18:index.par18,

        score1:this.state.change1, score2:this.state.change2, score3:this.state.change3, score4:this.state.change4, score5:this.state.change5, score6:this.state.change6, score7:this.state.change7,
          score8:this.state.change8, score9:this.state.change9, score10:this.state.change10, score11:this.state.change11, score12:this.state.change12, score13:this.state.change13, score14:this.state.change14, score15:this.state.change15, score16:this.state.change16, score17:this.state.change17, score18:this.state.change18
      }
    ).then(
      (response) => {
        console.log(response.data);
        this.setState({
          golf:response.data
        })
        componentDidMount();
        console.log(this.state.golf);
      }
    )
    console.log(this.state);
    console.log(event.target.getAttribute('id'));
  }

  render = () => {
    const { index } = this.props
    return (
      <React.Fragment>
      {(this.state.show) ? (
        <tr>
          <th>Score</th>
          <th colSpan="19">
            <form id={index.id} onSubmit={this.updateScore}>
              <input type="number" onKeyUp={this.change1} placeholder="Hole #1"/>
              <input type="number" onKeyUp={this.change2} placeholder="Hole #2"/>
              <input type="number" onKeyUp={this.change3} placeholder="Hole #3"/>
              <input type="number" onKeyUp={this.change4} placeholder="Hole #4"/>
              <input type="number" onKeyUp={this.change5} placeholder="Hole #5"/>
              <input type="number" onKeyUp={this.change6} placeholder="Hole #6"/>
              <input type="number" onKeyUp={this.change7} placeholder="Hole #7"/>
              <input type="number" onKeyUp={this.change8} placeholder="Hole #8"/>
              <input type="number" onKeyUp={this.change9} placeholder="Hole #9"/>
              <input type="number" onKeyUp={this.change10} placeholder="Hole #10"/>
              <input type="number" onKeyUp={this.change11} placeholder="Hole #11"/>
              <input type="number" onKeyUp={this.change12} placeholder="Hole #12"/>
              <input type="number" onKeyUp={this.change13} placeholder="Hole #13"/>
              <input type="number" onKeyUp={this.change14} placeholder="Hole #14"/>
              <input type="number" onKeyUp={this.change15} placeholder="Hole #15"/>
              <input type="number" onKeyUp={this.change16} placeholder="Hole #16"/>
              <input type="number" onKeyUp={this.change17} placeholder="Hole #17"/>
              <input type="number" onKeyUp={this.change18} placeholder="Hole #18"/>
              <input type="submit"/>
            </form>
          </th>
        </tr> )
        : (
        <tr>
          <th>Score</th>
          <th>{index.score1}</th><th>{index.score2}</th><th>{index.score3}</th><th>{index.score4}</th><th>{index.score5}</th><th>{index.score6}</th>
          <th>{index.score7}</th><th>{index.score8}</th><th>{index.score9}</th><th>{index.score10}</th><th>{index.score11}</th><th>{index.score12}</th>
          <th>{index.score13}</th><th>{index.score14}</th><th>{index.score15}</th><th>{index.score16}</th><th>{index.score17}</th><th>{index.score18}</th>
        </tr> )
      }
        <tr>
          <th colSpan="19"><button onClick={this.toggleShow}>EDIT SCORE</button></th>
        </tr>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
);
