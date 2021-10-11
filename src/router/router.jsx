import { Favorite } from "pages/favorite";
import { Home } from "pages/home";
import { Mailbox } from "pages/mailbox";
import { Upload } from "pages/upload";
import { You } from "pages/you";
import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

export const RouterApp = () => {
    return (
        <Switch>
            <Route path="/favorite">
                <Favorite />
            </Route>
            <Route path="/upload">
                <Upload />
            </Route>
            <Route path="/mailbox">
                <Mailbox />
            </Route>
            <Route path="/you">
                <You />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}