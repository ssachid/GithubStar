import React from 'react';
import queryString from 'query-string';
import { battle } from './utils/api';
import PlayerPreview from './PlayerPreview';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import Player from './Player';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    console.log(queryString.parse(this.props.location.search))
    const {playerOneName, playerTwoName} = queryString.parse(this.props.location.search);
    battle([playerOneName, playerTwoName])
      .then((players) => {
        if ( players === null ) {
          return this.setState({
            error: 'Looks like there was an error. Check that both users exist on Github.',
            loading: false
          })
        }

        this.setState({
          error: null,
          winner: players[0],
          loser: players[1],
          loading: false
        })
      })
  }

  render() {
    const { error, winner, loser, loading } = this.state;
    if ( loading === true ) {
      return <Loading />
    }

    if ( error ) {
      return (
        <div>
          <p> { error } </p>
          <Link to="/battle">Reset</Link>
        </div>
      )
    }

    return (
      <div className="row">
        <Player
          label="winner"
          score={winner.score}
          profile={winner.profile} />

        <Player
          label="loser"
          score={loser.score}
          profile={loser.profile} />
      </div>
    )
  }
}

export default Results;
