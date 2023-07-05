import { BaseApplicationCustomizer, ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/profiles";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import "@pnp/sp/navigation";
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface INewHeaderApplicationCustomizerProperties {
    testMessage: string;
    Top: string;
    Bottom: string;
    context: ApplicationCustomizerContext;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class NewHeaderApplicationCustomizer extends BaseApplicationCustomizer<INewHeaderApplicationCustomizerProperties> {
    [x: string]: any;
    private _topPlaceholder;
    userPicUrl: string;
    userName: string;
    headerGreeting: string;
    qlItems: any[];
    onInit(): Promise<void>;
    private _renderPlaceHolders;
    private _onDispose;
}
//# sourceMappingURL=NewHeaderApplicationCustomizer.d.ts.map