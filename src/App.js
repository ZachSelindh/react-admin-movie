import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { dataProvider } from "./utils/dataProvider"

const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="matrix" list={ListGuesser} />
</Admin> 

export default App;
