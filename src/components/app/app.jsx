import React, {Fragment} from "react";
import Filter from "../filter/filter";
import TanksList from "../tanks-list/tanks-list";
const App = () => {
  return (
    <Fragment>
      <header className="page-header"></header>
      <main className="container">
        <h1 className="page-title">Сборки оборудования 2.0</h1>
        <Filter/>
        <TanksList />
      </main>
      <footer className="page-footer"></footer>
    </Fragment>
  );
};

export default App;
