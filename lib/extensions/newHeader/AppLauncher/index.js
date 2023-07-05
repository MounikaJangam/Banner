/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import './Applauncher.scss';
import { BsArrowRight } from 'react-icons/bs';
import { SiMicrosoftoutlook, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoftonenote } from 'react-icons/si';
// import {DiOnedrive} from 'react-icons/di'
// import {TbBrandBooking} from 'react-icons/tb'
export var AppLauncherItems = [
    { ico: SiMicrosoftoutlook,
        title: "OutLook",
        color: "#0078D4",
        url: "https://outlook.office.com/"
    },
    // {
    //     ico:DiOnedrive,
    //     title:"OneDrive",
    //     color:"#0078D4"
    // },
    {
        ico: SiMicrosoftword,
        title: "Word",
        color: "#0078D4",
        url: "https://www.microsoft365.com/launch/word"
    },
    {
        ico: SiMicrosoftexcel,
        title: "Excel",
        color: "#107C41",
        url: "https://www.microsoft365.com/launch/excel"
    },
    {
        ico: SiMicrosoftpowerpoint,
        title: "PowerPoint",
        color: "#c43e1c",
        url: "https://www.microsoft365.com/launch/powerpoint"
    },
    {
        ico: SiMicrosoftonenote,
        title: "OneNote",
        color: "#7719aa",
        url: "https://www.microsoft365.com/launch/onenote"
    }
];
var AppLauncher = function (props) {
    var wrapperRef = React.useRef(null);
    React.useEffect(function () {
        var checkifclickedoutside = function (event) {
            if (props.sidebarState &&
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)) {
                props.setSideBarState(false);
            }
        };
        document.addEventListener("mousedown", checkifclickedoutside);
        return function () {
            document.removeEventListener("mousedown", checkifclickedoutside);
        };
    }, [props.sidebarState]);
    return (React.createElement("div", { className: props.sidebarState ? 'AppLauncherContainer' : 'AppLauncherContainer--isHidden', ref: wrapperRef },
        React.createElement("div", { className: 'AppLauncherContainer_Header' },
            React.createElement("div", { onClick: function () { window.open("https://www.microsoft365.com/", "_blank"); } },
                React.createElement("h4", null, "Microsoft 365")),
            React.createElement("div", { className: props.sidebarState ? 'AppLauncherContainer_Header_icon_rotated' : 'AppLauncherContainer_Header_icon' },
                React.createElement(BsArrowRight, { size: 20, onClick: function () { props.setSideBarState(!props.sidebarState); } }))),
        React.createElement("div", { className: "AppLauncherContainer_Body" },
            React.createElement("div", { className: "AppLauncherContainer_Body_Header" },
                React.createElement("p", null, "Apps")),
            React.createElement("div", { className: "AppLauncherContainer_Body_Container" }, AppLauncherItems.map(function (x) {
                var Icon = x.ico;
                return (React.createElement("div", { className: 'AppLauncherContainer_Body_Container_Item', onClick: function () { window.open(x.url, "_blank"); } },
                    React.createElement("div", { className: 'AppLauncherContainer_Body_Container_Item__icon' },
                        React.createElement(Icon, { color: x.color, size: 24 })),
                    React.createElement("div", { className: 'AppLauncherContainer_Body_Container_Item__body' }, x.title)));
            }))),
        React.createElement("div", { onClick: function () { window.open("https://www.microsoft365.com/apps", "_blank"); }, className: "AppLauncherContainer_Footer" },
            React.createElement("p", null, "Explore all your Apps"))));
};
export default AppLauncher;
//# sourceMappingURL=index.js.map