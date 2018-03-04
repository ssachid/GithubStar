import React from 'react';

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
  }

  render() {
    const { playerOneName, playerTwoName } = this.state;
    return (
      <div>
        <div className="row">
          { !playerOneName &&
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
          }

         { !playerTwoName &&
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
          }
        </div>
      </div>
    )
  }
}

export default Battle;
