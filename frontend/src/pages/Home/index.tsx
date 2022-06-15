import { Nav, HomePages, HomePage, HomePageP } from "./style";
const Home = () =>{
  const homeNavPages:Array<string> = 
  ["Sobre", "Contato", "Serviços"];
  return (
    <div className="Home">
      <header className="Home-header">
        <Nav>
          <img src="" alt="logo" className="Home-logo"/>
          <HomePages>
            {
            homeNavPages.map((pages, index) =>
            <HomePage key={"pg" + index}><HomePageP>{pages}</HomePageP></HomePage>)
            }
          </HomePages>
        </Nav>
      </header>
    </div>
  );
}

export default Home;