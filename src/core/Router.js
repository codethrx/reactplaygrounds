import React from "react";
//react router
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  //   useSearchParams,
} from "react-router-dom";
//Components
import Books from "../chapters/chapter4/Books";
import Home from "../chapters/chapter4/Home";
import Book from "../chapters/chapter4/Book";
import GamesRoutes from "../chapters/chapter4/GamesRoutes";
import NotFound from "../chapters/chapter4/NotFound";
function Router() {
  //   const [searchVal, setSearchVal] = useSearchParams({ val: 0 });
  //   const number = searchVal.get("val");
  //   console.log(number);
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          to="/books"
        >
          Books
        </NavLink>
        <NavLink state={"anc"} to="/games">
          games..
        </NavLink>
      </div>
      {/* <Routes>
        <Route path="/books" element={<h1>Extra Content...</h1>}></Route>
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<Books />} />
          <Route path=":id" element={<Book />} />
          <Route path="newBook" element={<h1>Newbook</h1>} />
        </Route>
        <Route path="*" element={<h1>Not found..</h1>} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={
            <div>
              <nav>
                <Link to="/books/1">b#1</Link>
                <Link to="/books/2">b#2</Link>
              </nav>
              <Outlet context={{ hello: "world" }} />
            </div>
          }
        >
          <Route index element={<Books />} />
          <Route path=":id" element={<Book />} />
          <Route path="newBook" element={<h1>Newbook</h1>} />
        </Route>
        <Route path="/games/*" element={<GamesRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
