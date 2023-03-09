import Header from './Header';
import Footer from './Footer';
import Body from './Body';

 

function Home() {
    return (
      <div className="Home">
        <Header content="Header Content"></Header>
        <Body title="Body Title"></Body>
        <Footer year="2022"></Footer> 
      </div>
    );
}
 
export default Home;