import React from 'react';
import queryString from 'query-string';
import { battle } from './utils/api';

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
    const [playerOneName, playerTwoName] = queryString.parse(this.props.location.search);
    battle([playerOneName, playerTwoName])
      .then((players) => {
        if ( players === null ) {
          return this.setState({
            error: 'Looks like there was an error. Check that both users exist on Github.'
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
      return <p> Loading </p>
    }

    return (
      <div>Results</div>
    )
  }
}

export default Results;
