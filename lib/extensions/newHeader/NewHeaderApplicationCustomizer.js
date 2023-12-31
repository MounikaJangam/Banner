var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* eslint-disable*/
import { Log } from '@microsoft/sp-core-library';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BaseApplicationCustomizer, PlaceholderName, } from '@microsoft/sp-application-base';
import * as strings from 'NewHeaderApplicationCustomizerStrings';
import Headercomponent from './Components/Headercomponent';
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/profiles";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { getSP } from './Components/pnpConfig';
import "@pnp/sp/navigation";
// import SpService from '../newsTicker/service/SpService';
var LOG_SOURCE = 'NewHeaderApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var NewHeaderApplicationCustomizer = /** @class */ (function (_super) {
    __extends(NewHeaderApplicationCustomizer, _super);
    function NewHeaderApplicationCustomizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qlItems = new Array;
        return _this;
    }
    // private _spService: SpService;
    NewHeaderApplicationCustomizer.prototype.onInit = function () {
        //     this.footerPlaceholder
        //      if (window.performance != undefined && window.performance != null) {
        //        if (window.performance.mark != undefined && window.performance.mark != null) {
        //          window.performance.mark('Method-Begin');
        //        }
        //      }
        Log.info(LOG_SOURCE, "Initialized ".concat(strings.Title));
        // Added to handle possible changes on the existence of placeholders.  
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        //  zthis.context.application.navigatedEvent.add(this, this._renderPlaceHolders); 
        //  const sp:SPFI = getSP(this.context);
        //  this._spService = new SpService(sp);
        // Call render method for generating the HTML elements.  
        // var x=  this.getData();
        // console.log(x);
        this._renderPlaceHolders();
        return Promise.resolve();
    };
    NewHeaderApplicationCustomizer.prototype._renderPlaceHolders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _sp, navItems, userDetails, user, tenantUri, d, hour, greeting, topString, ele;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _sp = getSP(this.context);
                        return [4 /*yield*/, _sp.web.navigation.quicklaunch()];
                    case 1:
                        navItems = _a.sent();
                        navItems.map((function (y) {
                            _this.qlItems.push({ title: y.Title, url: y.Url });
                        }));
                        return [4 /*yield*/, _sp.web.currentUser()];
                    case 2:
                        userDetails = _a.sent();
                        console.log(userDetails);
                        return [4 /*yield*/, _sp.web.currentUser()];
                    case 3:
                        user = (_a.sent()).Title;
                        this.userName = user;
                        tenantUri = window.location.protocol + "//" + window.location.host;
                        //  console.log(tenantUri)
                        this.userPicUrl = "".concat(this.context.pageContext.web.absoluteUrl).concat("/_layouts/15/userphoto.aspx?size=L&accountname=" + this.context.pageContext.user.email + "");
                        d = new Date();
                        hour = d.getHours();
                        greeting = hour > 12 ? (hour > 17 ? "Good Evening" : "Good Afternoon") : "Good Morning";
                        this.headerGreeting = greeting;
                        //  console.log(this.headerGreeting);
                        // console.log('HelloWorldApplicationCustomizer._renderPlaceHolders()');  
                        // console.log('Available placeholders: ',  
                        this.context.placeholderProvider.placeholderNames.map(function (name) { return PlaceholderName[name]; }).join(', ');
                        //  try{
                        // Handling the top placeholder  
                        if (!this._topPlaceholder) {
                            this._topPlaceholder =
                                this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
                            // The extension should not assume that the expected placeholder is available.  
                            if (!this._topPlaceholder) {
                                console.error('The expected placeholder (Top) was not found.');
                                return [2 /*return*/];
                            }
                            if (this.properties) {
                                topString = this.properties.Top;
                                if (!topString) {
                                    topString = '(Top property was not defined.)';
                                }
                            }
                        }
                        ele = React.createElement(Headercomponent, { user: this.userName, greet: this.headerGreeting, url: this.userPicUrl, uri: tenantUri, sitename: this.context.pageContext.web.title, items: this.qlItems, siteabsUrl: this.context.pageContext.web.absoluteUrl, context: this.context });
                        ReactDOM.render(ele, this._topPlaceholder.domElement);
                        return [2 /*return*/];
                }
            });
        });
    };
    NewHeaderApplicationCustomizer.prototype._onDispose = function () {
        // console.log('[AlertApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
    };
    return NewHeaderApplicationCustomizer;
}(BaseApplicationCustomizer));
export default NewHeaderApplicationCustomizer;
//# sourceMappingURL=NewHeaderApplicationCustomizer.js.map