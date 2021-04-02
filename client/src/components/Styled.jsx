import styled from 'styled-components';

const Container = styled.div`
width: 80%;
border-color: 1px solid red;
`;
const ContainerGrid = styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
`;

const ButtonWrap = styled.div`
display: flex;
justify-content: center;
padding: 5px;
`;

const Header = styled.h1`
text-align: center;
padding:10px;
`;

const styles = {
  Container, ContainerGrid, ButtonWrap, Header,
};

export { styles as default };
