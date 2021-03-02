import React, {Fragment} from "react";
import Filter from "../filter/filter";
import TanksList from "../tanks-list/tanks-list";
import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";

const App = () => {
  return (
    <Fragment>
      <PageHeader />
      <main className="">
        <h1 className="page-title">Сборки оборудования 2.0</h1>
        <Filter/>
        <TanksList />
      </main>
      <PageFooter />
    </Fragment>
  );
};

export default App;
