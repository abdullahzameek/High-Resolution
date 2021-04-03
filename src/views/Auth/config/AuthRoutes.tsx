import React from "react"; 
import { Route, Switch, Redirect } from "react-router-dom"; 
import Login  from "../components/login"; 
import SignUp from "../components/signup";


export const AuthRoutes = () => {
    return (<Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Redirect to="/auth/login" from="/auth" />
    </Switch>
    )
};