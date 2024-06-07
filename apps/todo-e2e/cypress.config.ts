import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run todo:serve:development',
        production: 'nx run todo:serve:production',
      },
      ciWebServerCommand: 'nx run todo:serve-static',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
