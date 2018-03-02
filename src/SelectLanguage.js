import React from 'react'
import PropTypes from 'prop-types';

class SelectLanguage extends React.Component {
  render() {
    let languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

    return (
      <ul className='languages'>
        { languages.map((lang,index) =>
          {
            return (
                <li
                    onClick={() =>this.props.onSelect(lang)}
                    key={lang}
                    style={ lang === this.props.selectedLanguage ? {color: '#d0021b'} : null} >
                  {lang}
                </li>
              )
          } )
        }
      </ul>
    )
  }
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectLanguage;
