import Main from "./components/Main";
import ThemeProvider from "./store/ThemeProvier";

const App = () => {
  return (
    <ThemeProvider>
      <Main className="dark" />
    </ThemeProvider>
  );
};

export default App;
