import React from 'react';
import PlayerInput from './PlayerInput';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id,username) {
    this.setState({
      [`${id}Name`]: username,
      [`${id}Image`]: `https://github.com/${username}.png?size=200`
    })
  }

  handleReset(id) {
    this.setState(() => {
      [`${id}Name`]: '',
      [`${id}Image`]: null
    })
  }

  render() {
    const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } = this.state;
    return (
      <div>
        <div className="row">
          { !playerOneName &&
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
          }

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              onReset={this.handleReset}
              id='playerOne' /> }

         { !playerTwoName &&
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
          }

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              onReset={this.handleReset}
              id='playerTwo' /> }
        </div>
      </div>
    )
  }
}

export default Battle;
