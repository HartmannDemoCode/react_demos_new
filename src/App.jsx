import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/reducer">Reducer</Link> |{" "}
        <Link to="/infinitescroll">Infinite Scroll Demo</Link> |{" "}
      </nav>
      <Outlet/>
    </div>
  );
}
