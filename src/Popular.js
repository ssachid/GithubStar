import React from 'react';

class Popular extends React.Component {
  render() {
    let languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="languages">
        {languages.map((lang, index) => <li key={lang}>{lang}</li>)}
      </ul>
    )
  }
}

export default Popular;
