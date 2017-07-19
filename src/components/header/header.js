import React from 'react';
import styled from 'styled-components';

import Avatar from './avatar';

const Jump = styled.span`
  display: inline-block;
  transition: transform 0.2s;
  cursor: default;
  min-width: 20px;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  font-size: 50px;

  &:hover {
    transform: translateY(-20px) rotate(10deg) scale(2);
  }
`;

const Header = ({ title }) =>
  <div>
    <Avatar picture="https://avatars0.githubusercontent.com/u/9496960?v=4&s=460" />
    {[...title].map(letter =>
      <Jump>
        {letter}
      </Jump>
    )}
  </div>;

export default Header;
