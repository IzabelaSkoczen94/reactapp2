import React from 'react';
import  {Route, Redirect} from 'react-router-dom';
//uprawnienie uzytkownika 
const permission = false; //jesli nie ma uptrawnien przekierowanie do logowania

const AdminHomePage = () => {
    return ( 
        // za kazdym razem route ma byc prawdziwy, nie podaje path
    <Route render={()=> (
        permission ? (<h3>Panel amina</h3>) : (
            <Redirect to="/login"/>
        )
    )} />
    );
}
 
export default AdminHomePage;