import React from 'react';
import styled from 'styled-components';

import Repository from './repository';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Repositories = ({ repos }) =>
  <Wrapper>
    {repos.map((repo, i) => <Repository key={i} repository={repo} />)}
  </Wrapper>;

export default Repositories;
