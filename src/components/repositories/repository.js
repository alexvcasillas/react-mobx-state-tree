import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  color: #1e1e1e;
  border-radius: 4px;
  padding: 20px;
`;

const Title = styled.div`
  display: block;
  font-weight: 600;
  margin-bottom: 10px;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const Fork = styled.span`
  display: inline-block;
  margin-right: 10px;
  color: #979797;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  outline: none;
  color: #ffc600;
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
    outline: none;
    color: #1e1e1e;
  }
`;

const Homepage = styled.a`
  display: inline-block;
  text-decoration: none;
  outline: none;
  color: #ffc600;
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
    outline: none;
    color: #1e1e1e;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const Block = styled.div`
  width: 100%;
  display: block;
  margin-top: 10px;
`;

const Repository = ({ repository }) =>
  <Wrapper>
    <Card>
      <Title>
        {repository.isFork ? <Fork>Forked</Fork> : ''}
        <Link href={repository.url} target="_blank" rel="noopener noreferrer">
          {repository.name}
        </Link>
      </Title>
      <Description>
        {repository.description}
      </Description>
      <Block>
        <strong>Homepage: </strong>
        <Homepage target={repository.homepageUrl}>
          {repository.homepageUrl}
        </Homepage>
      </Block>
      <Block>
        <strong>
          <span role="img" aria-label="Star Emoji">
            🌟
          </span>{' '}
          Stargrazzers:{' '}
        </strong>{' '}
        {repository.stargazers.totalCount}
      </Block>
      <Block>
        <strong>Created at: </strong>{' '}
        {new Date(repository.createdAt).toLocaleString()}
      </Block>
      <Block>
        <strong>Last update at: </strong>{' '}
        {new Date(repository.updatedAt).toLocaleString()}
      </Block>
    </Card>
  </Wrapper>;

export default Repository;
