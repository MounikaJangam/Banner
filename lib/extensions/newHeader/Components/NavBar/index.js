var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { navItems } from './helper';
import { AiOutlineSearch } from 'react-icons/ai';
import '../Headercomponent.scss';
import { CgDetailsMore } from "react-icons/cg";
import { getSP } from '../pnpConfig';
var MenuBar = React.memo(function (props) {
    var qlItems = [];
    var _a = useState(false), sbState = _a[0], setSbState = _a[1];
    var _b = useState(), QuickLaunchItems = _b[0], setQuickLaunchItems = _b[1];
    var menuRef = React.useRef(null);
    var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, navItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = getSP(props.context);
                    return [4 /*yield*/, _sp.web.navigation.quicklaunch()];
                case 1:
                    navItems = _a.sent();
                    navItems.map((function (y) {
                        qlItems.push({ title: y.Title, url: y.Url });
                    }));
                    setQuickLaunchItems(qlItems);
                    return [2 /*return*/];
            }
        });
    }); };
    var url = props.siteabsUrl.split("/");
    var mainsite = url[4];
    var renderSwitch = function (param) {
        switch (props.sitename) {
            case param.site:
                return param.realsitename === mainsite ? (React.createElement("div", { className: "navItemActive", onClick: function () {
                        return window.open("".concat(props.uri, "/sites/").concat(param.realsitename, "?env=Embedded"), "_self");
                    } },
                    React.createElement("a", { href: "".concat(props.uri, "/sites/").concat(param.realsitename, "?env=Embedded") }, param.title))) : (React.createElement("div", { className: "navItemActive", onClick: function () {
                        return window.open("".concat(props.uri, "/sites/").concat(mainsite, "/").concat(param.realsitename, "?env=Embedded"), "_self");
                    } }, param.title));
            default:
                return param.site === mainsite ? (React.createElement("div", { className: "navItem", onClick: function () {
                        return window.open("".concat(props.uri, "/sites/").concat(param.realsitename, "?env=Embedded"), "_self");
                    } }, param.title)) : (React.createElement("div", null,
                    React.createElement("div", { className: "navItem", onClick: function () {
                            return window.open("".concat(props.uri, "/sites/").concat(mainsite, "/").concat(param.realsitename, "?env=Embedded"), "_self");
                        } }, param.title)));
        }
    };
    React.useEffect(function () {
        getData();
    }, []);
    useEffect(function () {
        console.log(sbState);
    }, [sbState]);
    return (React.createElement("div", { className: "topnav" },
        React.createElement("div", { className: sbState ? 'sidebaropen' : 'sidebar', ref: menuRef }, QuickLaunchItems === null || QuickLaunchItems === void 0 ? void 0 : QuickLaunchItems.map(function (x) {
            return (React.createElement("a", { className: 'sidebaritem', href: x.url },
                React.createElement("div", null, x.title)));
        })),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("div", { className: "navList" },
                    React.createElement("div", { className: props.sitename === "Zelardemo" ? 'navItemHidden' : 'navItem', onClick: function () { setSbState(!sbState); } },
                        React.createElement(CgDetailsMore, null)),
                    navItems.map(function (x) {
                        return renderSwitch(x);
                    })))),
        React.createElement("div", { className: "searchBardiv" },
            React.createElement("form", { action: "/sites/".concat(mainsite, "/_layouts/search.aspx/All"), method: "get" },
                React.createElement("input", { type: "text", placeholder: "Search..", name: "q" })),
            React.createElement("button", { className: "submitbtn", type: "submit" },
                React.createElement("a", { target: "_blank" },
                    React.createElement(AiOutlineSearch, { size: 15 }))))));
});
export default MenuBar;
//# sourceMappingURL=index.js.map