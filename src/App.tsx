import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { exampleBooks } from "./domain/book/exampleBooks";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BookList books={exampleBooks} />
    </div>
  );
}

export default App;
