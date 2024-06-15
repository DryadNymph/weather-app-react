import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a href="https://www.linkedin.com/in/lali-nibladze146151019960916/">
            Lali Nibladze
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/DryadNymph/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-spurced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
