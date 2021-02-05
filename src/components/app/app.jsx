import React, {Fragment} from "react";
import Filter from "../filter/filter";


const App = () => {
  return (
    <Fragment>
      <header className="page-header"></header>
      <main className="container">
        <Filter/>
      </main>
      <footer className="page-footer"></footer>
    </Fragment>
  );
};

export default App;
