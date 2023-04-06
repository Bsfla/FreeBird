import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  width: 5rem;
  height: 3rem;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  top: 20px;
  left: 0;
  z-index: 99999;
  position: absolute;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);

  .rect {
    top: 0;
    left: 10px;
    transform: rotate(135deg);
    position: absolute;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);

    width: 10px;
    height: 4px;
  }

  .option {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    .edit {
      color: green;
    }

    .delete {
      color: red;
    }

    span {
      font-size: 13px;
      width: 100%;
      display: flex;
      justify-content: center;

      &:hover {
        background-color: #fafafa;
      }
    }
  }
`;
