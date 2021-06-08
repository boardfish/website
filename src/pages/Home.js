import React from 'react';
import banner from "../images/fastbun.png";
import { Container, Header, Image } from 'semantic-ui-react';


function Home() {

  return <Container>
    <Header as="h1"> Formula bun </Header>
      <Header> gaming </Header>
      <Image src={banner}/>
      <p>
        <a href={`srb2kart://ip/${process.env.REACT_APP_SERVER}`}> join formula bun </a>
      </p>
    </Container>
}

export default Home;
