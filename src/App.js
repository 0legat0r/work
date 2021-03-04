import React from "react"
import CompaniesList from "./components/CompaniesList";
import { categoriesWithCompanies } from "./utils";

class App extends React.Component {

  state = {
    categoriesWithCompanies,
    activeCategory: undefined
  }

  changeCategory = (activeCategory) => {
    this.setState({ activeCategory });
  }

  render() {

    const { categoriesWithCompanies, activeCategory } = this.state;
 
    return (
      <CompaniesList 
        data={categoriesWithCompanies} 
        activeCategory={activeCategory}
        changeCategory={this.changeCategory}
      />
    )
  }
}

export default App;