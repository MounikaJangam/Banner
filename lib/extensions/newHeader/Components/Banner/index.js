import * as React from 'react';
import '../Headercomponent.scss';
import { CgMenuGridO } from 'react-icons/cg';
// import { useEffect, useState } from 'react';
var Banner = function (props) {
    // const scrollDemo = document.querySelector(".maincontent");
    // const [small, setSmall] = useState(false);
    return (React.createElement("div", { className: "Navbars" },
        "   ",
        React.createElement("div", { className: 'Navbar_moreAppsIcon' },
            React.createElement(CgMenuGridO, { size: 25, color: 'white', onClick: function () { return props.setSideBarState(!props.SideBarState); } })),
        React.createElement("a", { href: "https://zelarsoft.com/", target: "_blank" },
            React.createElement("img", { className: "img1", src: "".concat(props.siteabsUrl, "/SiteAssets/Zelarlogo.png"), alt: "Logo" }))));
};
export default Banner;
//# sourceMappingURL=index.js.map