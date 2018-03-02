import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState({selectedLanguage: lang})
  }

  render() {
    let languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
    console.log(this); // Popular
    return (
      <ul className='languages'>
        { languages.map( (lang,index) =>
          {
            console.log(this) // Popular
            return (
              <li onClick={() =>this.updateLanguage(lang)}
                  key={lang}
                  style={ lang === this.state.selectedLanguage ? {color: '#d0021b'} : null} >
                {lang}
              </li>
            )
          } )
        }
      </ul>
    )
  }
}
export default Popular;
