import Header from "./components/header.jsx";
import Nav from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Page from "./components/page.jsx";
import { useLocation } from "react-router-dom"; 

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
