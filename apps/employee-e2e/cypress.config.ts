import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run employee:serve:development',
        production: 'nx run employee:serve:production',
      },
      ciWebServerCommand: 'nx run employee:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
