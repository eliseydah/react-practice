import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };
const App = () => {
 return (
  // <StrictMode>
    <div>
      <h1> Padre Gino's  - order now</h1>
    <Order/>
    </div>
  // </StrictMode>
 )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
