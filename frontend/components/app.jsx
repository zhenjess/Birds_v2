import React from "react";

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Modal from './modal/modal';

import Main from './main/main';

import SignupFormContainer from './session/signup_form_container';

import LoginFormContainer from './session/login_form_container';

import LogoutFormContainer from './session/logout_form_container';

import AccountFormsContainer from './session/account_forms_container';

import NavBarContainer from './navbar/navbar_container';

import MainContainer from './main/main_container';

import AboutMain from './main/about_main';

import MaterialsMain from './main/materials_main';

import AccessoriesMain from './main/accessories_main';

import Materials from './materials/materials';

import AboutMaterials from "./materials/about_materials";


import Tree from './materials/tree/tree';

import AboutTreeMaterial from './materials/tree/about_tree_material';


import Sugar from './materials/sugar/sugar';

import AboutSugarMaterial from './materials/sugar/about_sugar_material';

import Trino from './materials/trino/trino';

import AboutTrinoMaterial from './materials/trino/about_trino_material';

import Branches from './branches/branches';

import ShoeIndexContainer from './shoes/shoe_index_container';

import CartFormContainer from './cart/cart_form_container';


import Footer from './footer/footer_container';

const App = () => (
    <div>
        <div>
            <Modal />

            <Route path={"/"} component={NavBarContainer} />
        </div>

        <Switch>
            <Route exact path={"/"} component={Main} />
            <Route exact path={"/account/login"} component={AccountFormsContainer} />
            <Route exact path={"/account"} component={LogoutFormContainer} />
            <Route exact path={"/shoes/:gender"} component={ShoeIndexContainer} />
            <Route exact path={"/materials"} component={Materials} />
            <Route exact path={"/materials/tree"} component={Tree} />
            <Route exact path={"/materials/sugar"} component={Sugar} />
            <Route exact path={"/materials/trino"} component={Trino} />
            <Route exact path={"/branches"} component={Branches} />
            <Route exact path={"/cart"} component={CartFormContainer} />
        </Switch>

        <Route exact path={"/"} component={AboutMain} />
        <Route exact path={"/"} component={MaterialsMain} />

        <Route exact path={"/materials"} component={AboutMaterials} />
        <Route exact path={"/materials/tree"} component={AboutTreeMaterial} />
        <Route exact path={"/materials/sugar"} component={AboutSugarMaterial} />
        <Route exact path={"/materials/trino"} component={AboutTrinoMaterial} />

        <div className='footer'>
            <Footer />
        </div>

    </div>
);

export default App;

