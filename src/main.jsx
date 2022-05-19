import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import ReducerDemo from "./routes/reducerdemo";
import InfiniteScrollDemo from "./routes/InfiniteScrollDemo";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
  <div className="content">
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="reducer" element={<ReducerDemo />} />
        <Route path="infinitescroll" element={<InfiniteScrollDemo />} />
      </Route>
      <Route path="*" element={ <main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main> } />
    </Routes>
    </div>
  </BrowserRouter>,
  rootElement
);


