import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {App} from "App";
import store from "store";
import Theme from 'components/Theme/index';
import {GlobalStyles} from 'components/Theme/GlobalStyles'

ReactDOM.render(
    <Provider store={store}>
        <Theme>
            <GlobalStyles/>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Theme>
    </Provider>,
    document.getElementById("root")
);