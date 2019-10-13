import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store';
import Menubar from './components/ui/Menubar/Menubar';
import DamageCalc from './container/DamageCalc/DamageCalc';
import DraftPlanner from './container/DraftPlanner/DraftPlanner';
import MainPage from './container/MainPage/MainPage';
import "./../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Menubar />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/dmgcalc" component={DamageCalc} />
                    <Route path="/draftplanner" component={DraftPlanner} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);