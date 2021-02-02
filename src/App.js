import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { MovieList } from "./Lists/MovieList"
import { dataProvider } from "./utils/dataProvider"
import  Dashboard from "./Components/Dashboard"

const App = () => 
<Admin 
  dataProvider={dataProvider}
  dashboard={Dashboard}
  >
    <Resource name="Movie" list={MovieList} />
</Admin> 

export default App;
