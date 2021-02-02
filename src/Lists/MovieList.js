import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const MovieList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="Title" />
            <DateField source="Year" />
            <TextField source="imdbID" />
            <TextField source="Type" />
            <TextField source="Poster" />
            <TextField source="id" />
        </Datagrid>
    </List>
);