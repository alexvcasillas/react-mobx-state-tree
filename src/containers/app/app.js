import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Loading from '../../components/loading/loading';
import Header from '../../components/header/header';
import Repositories from '../../components/repositories/respositories';

const defaultName = 'Alex Casillas';
const defaultAvatar =
  'https://avatars0.githubusercontent.com/u/9496960?v=4&s=460';

const Wrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const App = ({ github }) =>
  github.fetchingData
    ? <Loading />
    : <Wrapper>
        <Header
          avatar={github.user ? github.user.avatar : defaultAvatar}
          title={github.user ? github.user.name : defaultName}
          followingCount={github.user ? github.user.following : 0}
          followersCount={github.user ? github.user.followers : 0}
        />
        {github.repos.length ? <Repositories repos={github.repos} /> : null}
      </Wrapper>;

export default inject('github')(observer(App));
