import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 36rem;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  position: relative;

  button {
    margin: 0 auto;
    font-size: 15px;
  }

  span {
    color: ${theme.colors.sub};
    font-weight: bold;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  span {
    flex: 1;
  }

  button {
    width: 5rem;
    border-radius: 10px;
    margin-right: 15px;
    background-color: ${theme.colors.gray3};
    border: none;
    padding: 6px;
    cursor: pointer;
    font-size: 12px;
  }
`;
