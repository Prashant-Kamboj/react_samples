import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Welcome to the home page
      </h1>
    </div>
  );
}
