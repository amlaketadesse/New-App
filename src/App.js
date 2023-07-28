import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Books from "./components/pages/Books";
import BookInfo from "./components/pages/BookInfo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { books } from "./data";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route  path="/" exact component={Home} />
        <Route  path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} />} />
        <Route path="/cart" render={() => <Cart books={books} />}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
