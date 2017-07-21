import React from 'react';
import styled from 'styled-components';

import Grid, { Column } from '../grid/grid';

import Avatar from './avatar';

const Wrapper = styled.div`
  width: 600px;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Name = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Jump = styled.span`
  display: inline-block;
  transition: transform 0.2s;
  cursor: default;
  min-width: 20px;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    transform: translateY(-20px) rotate(10deg) scale(2);
  }
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Amount = styled.div`
  font-size: 40px;
  font-family: 'Pacifico', sans-serif;
  color: ${({ count }) => (count && count >= 100 ? '#ffc600' : 'inherit')};
`;

const FollowBox = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  color: #1e1e1e;
  border-radius: 4px;
  text-align: center;
`;

const Social = styled.div`margin: 40px 0;`;

const SVG = styled.svg`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
  }
`;

const Header = ({ title, avatar, followingCount, followersCount }) =>
  <Wrapper>
    <Avatar picture={avatar} />
    <Name>
      {[...title].map((letter, i) =>
        <Jump key={i}>
          {letter}
        </Jump>
      )}
    </Name>
    <Social>
      <Grid>
        <Column size={2} style={{ textAlign: 'right', paddingRight: 10 }}>
          <a
            href="https://twitter.com/alexvcasillas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG height="32" viewBox="0 0 32 32" width="32">
              <path
                d="M31.993 6.077c-1.177.523-2.44.876-3.77 1.033 1.355-.812 2.396-2.098 2.887-3.63-1.27.75-2.673 1.3-4.168 1.592C25.744 3.797 24.038 3 22.15 3c-3.626 0-6.563 2.938-6.563 6.563 0 .514.057 1.016.17 1.496C10.3 10.784 5.464 8.17 2.226 4.2c-.564.97-.888 2.098-.888 3.3 0 2.28 1.158 4.287 2.918 5.465-1.075-.035-2.087-.33-2.972-.82v.08c0 3.182 2.26 5.835 5.264 6.438-.55.15-1.13.23-1.73.23-.423 0-.833-.04-1.233-.117.834 2.606 3.26 4.504 6.13 4.558-2.245 1.76-5.075 2.81-8.15 2.81-.53 0-1.053-.03-1.566-.09C2.906 27.913 6.356 29 10.063 29c12.072 0 18.675-10 18.675-18.675 0-.284-.008-.568-.02-.85 1.283-.925 2.395-2.08 3.276-3.398z"
                fill="#ffffff"
              />
            </SVG>
          </a>
        </Column>
        <Column size={2} style={{ textAlign: 'left', paddingLeft: 10 }}>
          <a
            href="https://github.com/alexvcasillas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG height="32" viewBox="0 0 32 32" width="32">
              <path
                clipRule="evenodd"
                d="M16.003 0C7.17 0 .008 7.162.008 15.997c0 7.067 4.582 13.063 10.94 15.18.8.145 1.052-.33 1.052-.753 0-.38.008-1.442 0-2.777-4.45.967-5.37-2.107-5.37-2.107-.728-1.848-1.776-2.34-1.776-2.34-1.452-.992.11-.973.11-.973 1.604.113 2.45 1.65 2.45 1.65 1.427 2.442 3.743 1.736 4.654 1.328.146-1.034.56-1.74 1.017-2.14C9.533 22.663 5.8 21.29 5.8 15.16c0-1.747.622-3.174 1.645-4.292-.165-.404-.715-2.03.157-4.234 0 0 1.343-.43 4.398 1.64 1.276-.354 2.645-.53 4.005-.537 1.36.006 2.727.183 4.005.538 3.055-2.07 4.396-1.64 4.396-1.64.872 2.202.323 3.83.16 4.233 1.022 1.118 1.643 2.545 1.643 4.292 0 6.146-3.74 7.498-7.305 7.893C19.48 23.548 20 24.508 20 26v4.428c0 .428.258.9 1.07.746C27.422 29.054 32 23.062 32 15.997 32 7.162 24.838 0 16.003 0z"
                fill="#ffffff"
                fillRule="evenodd"
              />
            </SVG>
          </a>
        </Column>
      </Grid>
    </Social>
    <FollowBox>
      <Grid>
        <Column size={2}>
          <Title>Followers</Title>
          <Amount count={followersCount}>
            {followersCount}
          </Amount>
        </Column>
        <Column size={2}>
          <Title>Following</Title>
          <Amount count={followingCount}>
            {followingCount}
          </Amount>
        </Column>
      </Grid>
    </FollowBox>
  </Wrapper>;

export default Header;
