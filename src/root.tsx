import { Outlet, Scripts, type LinksFunction } from "react-router";
import stylesheet from "./index.css?url";

export const links: LinksFunction = () => [
  // ...
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
      </head>
      <body>
        <h1>Hello world!</h1>
        <button>click me</button>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
