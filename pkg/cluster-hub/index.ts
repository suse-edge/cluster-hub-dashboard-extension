import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';
import extensionRouting from './routing/extension-routing';

// Init the package
export default function (plugin: IPlugin): void {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // Load a product
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugin.addProduct(require('./config/cluster-hub'));

  // Add Vue Routes
  plugin.addRoutes(extensionRouting);
}
