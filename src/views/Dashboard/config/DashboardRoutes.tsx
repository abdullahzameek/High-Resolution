import React from "react"; 
import { Route, Switch, Redirect } from "react-router-dom"; 
import Results from "../../../components/search/Results";
import Dashboard  from "../components/dashboard"; 

export const DashboardRoutes = () => {
    return (
    <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/results" component={Results}/>
    </Switch>
)
};
