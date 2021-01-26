import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizLogo from '../src/components/QuizLogo/index';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz - Pokémon!</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz Em Construção</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Aguarde enquanto preparamos um ótimo quiz para você!</p>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={(event) => {
                  // State
                  // name = event.target.value;
                  setName(event.target.value);
                }}
                placeholder="Diz aí seu nome pra jogar :)"
              />
              {/* eslint-disable-next-line react/button-has-type */}
              <button type="submit" disabled={name.length === 0}>
                JOGAR
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Futuros Quizes da Galera</h1>
            <p>Aqui terão vários quizes super interessantes dos outros alunos, aguarde!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/CesarRobertopg" />
    </QuizBackground>
  );
}
