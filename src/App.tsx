import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./routes/router";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="code-mastery-theme">
      <Router />
    </ThemeProvider>
  );
}

export default App;
