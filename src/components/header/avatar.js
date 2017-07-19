import styled from 'styled-components';

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${({ picture }) => picture});
  background-position: center;
  background-size: cover;
  border: 4px solid #ffffff;
  margin: 40px auto;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
`;

export default Avatar;
