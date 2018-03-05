import React from 'react';
import SelectLanguage from './SelectLanguage';
import {fetchPopularRepos} from './utils/api';
import Loading from './Loading';
import RepoGrid from './RepoGrid';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState({selectedLanguage: lang, repos: null})
    fetchPopularRepos(this.state.selectedLanguage)
      .then((repos) => this.setState({repos}))
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        { !this.state.repos
            ? <Loading />
            : <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

export default Popular;
