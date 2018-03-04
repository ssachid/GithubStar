import React from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({username: e.target.value})
  }

  render() {
    const {id} = this.props;
    const { username } = this.state;
    return (
      <form className='column' onSubmit={() => this.props.onSubmit(id,username)}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>

        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange} />

        <button className='button' type='submit' disabled={!this.state.username} >
          Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.integer.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

PlayerInput.defaultProps = {
  label: 'Username',
}

export default PlayerInput;
