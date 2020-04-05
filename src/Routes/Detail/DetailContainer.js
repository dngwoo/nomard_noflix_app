import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi } from '../../Components/api';

export default class extends React.Component {
  isMovie = this.props.location.pathname;
  constructor(props) {
    super(props); // 이 props는 생성자 props임. 매개변수로 받아오는 props랑 다른듯.
    console.log(this.isMovie);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/')
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id } // movies/:id 에서 id 값을 말함
      },
      history: { push }
    } = this.props;
    // console.log(id);
    const { isMovie } = this.state;
    const parsedId = parseInt(id); // 정수로 파싱
    if (isNaN(parsedId)) {
      push('/'); // id 값이 정수가 아니면 바로 홈으로 보내버림
    }
    let result = null;
    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await moviesApi.tvApi(parsedId);
        result = request.data;
      }
      // console.log(result);
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ laoding: false, result });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
