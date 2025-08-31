import { css } from "../styled-system/css";

function App() {
  return (
    <div
      className={css({
        fontSize: "2xl",
        background: "red",
        fontWeight: "bold",
      })}
    >
      Hello 🐼!
    </div>
  );
}

export default App;
