import React from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../Components/api';

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    loading: false,
    error: null
  };

  handleSubmit = e => {
    e.preventDefault(); // 엔터를 칠 경우 값이 보내고 그 뒤 초기화되고 새로고침되는 이벤트를 막아버림
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };
  updateTerm = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      searchTerm: value // searchTerm을 계속 바꿔줌(input창에 적는 글자들에 따라서)
    });
  };
  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      // console.log(movieResults, tvResults);
      this.setState({
        movieResults,
        tvResults
      });
      this.setState({ loading: true });
    } catch {
      this.setState({ error: "Can't find results" });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    // console.log(searchTerm);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
