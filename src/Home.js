import banner from "./images/fastbun.png";


function Home() {
  return <>
    <p> Formula bun </p>
    <p> gaming </p>
    <img src={banner}/>
    <p>
      <a href={`srb2kart://ip/${process.env.REACT_APP_SERVER}`}> join formula bun </a>
    </p>
    </>
}

export default Home;
