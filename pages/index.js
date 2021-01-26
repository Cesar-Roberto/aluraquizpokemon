import styled from "styled-components";
import db from "../db.json";
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuinzContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuinzContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz Em Construção</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Aguarde enquanto preparamos um ótimo quiz para você!</p>
            <input type="text" placeholder="Diz aí seu nome pra jogar :)"></input>
            <button >JOGAR</button>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Futuros Quizes da Galera</h1>
            <p>Aqui terão vários quizes super interessantes dos outros alunos, aguarde!</p>
            <ul></ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuinzContainer>
      <GitHubCorner projectUrl="https://github.com/CesarRobertopg"/>
    </QuizBackground>
  );
}
