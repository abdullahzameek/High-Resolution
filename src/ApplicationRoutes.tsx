import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthRoutes } from "./views/Auth";
import PrivateRoute from "./PrivateRoutes";
import { DashboardRoutes } from "./views/Dashboard";
import Results from "./components/search/Results";
import MakeResolution from './components/Resolutions/MakeResolution';
import Resolution from "./components/Resolutions/Resolution";

import EditProfile from "./components/Profile/EditProfile";

import DiscoverWrapper from "./components/discover/DiscoverWrapper";
import MakePost from "./components/posts/makePost";

const ApplicationRoutes = () => {
   return (
     <Router>
        <Switch>
         <PrivateRoute exact path="/dashboard" component={DashboardRoutes}/>
         <Route exact path="/search" component={Results}/>
         <Route exact path="/createNew" component={MakeResolution}></Route>
         <Route exact path='/editUser' component={EditProfile}/>
         <Route exact path="/discover" component={DiscoverWrapper}/>
         <Route exact path="/post" component={MakePost}></Route>
         
         <Route path="/auth" component={AuthRoutes} />
         <Redirect to="/auth" from= "/" />
       </Switch>
       </Router>
  );
}


export default ApplicationRoutes;