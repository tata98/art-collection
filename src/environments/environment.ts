// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  collectioApiBase:
    'https://collectionapi.metmuseum.org/public/collection/v1/search?title=true&q=',
  collectionObjectId:
    'https://collectionapi.metmuseum.org/public/collection/v1/objects/',
  firebase: {
    projectId: 'art-collection-d0bc6',
    appId: '1:763561690684:web:7c09416d1d426fc03f6539',
    storageBucket: 'art-collection-d0bc6.appspot.com',
    apiKey: 'AIzaSyAs9HaYwIh_9uxudA2Y5oSrWQxpEapR3OI',
    authDomain: 'art-collection-d0bc6.firebaseapp.com',
    messagingSenderId: '763561690684',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
