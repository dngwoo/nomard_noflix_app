import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/search' component={Search} />
      <Route path='/tv' component={TV} />
      <Route path='/tv/popular' render={() => <h1>Popular</h1>} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);

/* 리액트 라우터에 있는 composition(합성)에 대해서 이야기 해보자
    composition은 두 개 이상의 라우트를 동시에 랜더링하는 방식이다.
    예를 들어보자.
    <Redirect from='*' to='/' /> <- 을 써주게 되면 맞는 주소가 없다면 이게 실행된다.
    어떤 페이지든간에 /로 보낸다. 
    하지만 모든 페이지이름에 / 이 들어있기 때문에 무엇을 눌러도 전부 / 로 돌아 가게된다.
    그래서 쓰이는 것이 Switch 라는 것이다. 이것은 오직 한번에 하나의 라우트만 랜더해준다.
    내가 헷갈린 부분은 Switch를 쓰면서 왜 exact를 쓰느냐 였다. 이것의 이유는 스위치는 
    오직 한번에 하나의 라우터를 실행시켜주는 역할만 할뿐 주소를 차례대로 비교하다가 /tv보다
    /tv/popular 이 앞에 와있으면 Popular을 출력하게 된다.
*/
