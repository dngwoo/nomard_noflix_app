import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TVPresenter = ({ topRated, popular, airingTday, loading, error }) => null;

TVPresenter.PropTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingTday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
