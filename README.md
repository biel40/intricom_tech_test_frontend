# README

To run openapi generator, you need to have the NEST.JS API up and running in http://localhost:3000.
Then run the command: npx ng-openapi-gen --config ng-openapi-gen.json

All models will automatically be generated in TypeScript and placed in the src/app/open-api folder.

This models are synchronized with the NEST.JS API, so if you change the API, you need to run the command again to update the models.