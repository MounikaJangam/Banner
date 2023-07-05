import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

import { GraphFI, graphfi, SPFx as graphSPFx} from "@pnp/graph";

import { LogLevel, PnPLogging } from "@pnp/logging";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
var _graph: GraphFI = null;
export const getGraph = (context?:ApplicationCustomizerContext ): GraphFI => {
    if (_graph === null && context != null) {
      //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
      // The LogLevel set's at what level a message will be written to the console
      _graph =  graphfi().using(graphSPFx(context)).using(PnPLogging(LogLevel.Warning));
    }
    return _graph;
  };