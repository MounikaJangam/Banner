import React, { useState } from 'react';
import Banner from './Banner';
import MenuBar from './NavBar';
import Updates from './Updates/Updates';
import AppLauncher from '../AppLauncher';
var Headercomponent = function (props) {
    var _a = useState(false), sidebarState = _a[0], setSideBarState = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'header-gradiant' },
            React.createElement(AppLauncher, { sidebarState: sidebarState, setSideBarState: setSideBarState }),
            React.createElement(Banner, { user: props.user, greet: props.greet, url: props.url, uri: props.uri, sitename: props.sitename, items: props.items, siteabsUrl: props.siteabsUrl, setSideBarState: setSideBarState, sidebarState: sidebarState }),
            React.createElement(MenuBar, { user: props.user, greet: props.greet, url: props.url, uri: props.uri, sitename: props.sitename, items: props.items, siteabsUrl: props.siteabsUrl, context: props.context }),
            React.createElement(Updates, { user: props.user, greet: props.greet, sitename: props.sitename }))));
};
export default Headercomponent;
//# sourceMappingURL=Headercomponent.js.map