/* 컨테이너는 data를 가지고, state(상태값)을 가지고, api를 불러온다
 프레젠터는 그 데이터를 보여주는 역할을 한다. 또한 api같은 것을 전혀 모르며 그냥 함수형 컴포넌트이다. */

/* 컨테이너 = 데이터, 프레젠터 = 스타일 */

import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../Components/api';

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      // Object Deconstruction
      // console.log(nowPlaying);
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      // console.log(upcoming);
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      // console.log(popular)

      // throw Error();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: "Can't find movies information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

// 여기는 데이터만 받아서 HomePresenter로 보내는 역할임
