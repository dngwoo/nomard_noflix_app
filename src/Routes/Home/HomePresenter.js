import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section';
import Loader from '../../Components/Loader';

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title='Now Playing'>
          {nowPlaying.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {/* 트루 && 트루 && 실행 가능 하면 실행 
          a && b && console.log(a,b)
      */}
      {/* children 같은 경우ㅠ는 <Section>movie</Section> 여기서 movie를 뜻한다. 그럼 이값이 그리드에 넣어짐  */}
      {upcoming && upcoming.length > 0 && (
        <Section title='Upcoming Movies'>
          {upcoming.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Movies'>
          {popular.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  // 맨위는 소문자 propTypes
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
