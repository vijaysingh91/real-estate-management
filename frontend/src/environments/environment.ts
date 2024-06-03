// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    server: 'http://localhost:8000/',
    mapKey: 'AAPK42d34f1a31b846fbadd649dd24d1fc52siqWh_WHcHLqVAioNenFRPyLY06BpF7vSlX6MYRWt6IijmM42UIqxf5fw1iqylKl',
    googleAuthClientId: '',
    webSocketUrl: "ws://localhost:8000/websocket"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
