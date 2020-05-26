// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  productionURL: false,
  studentURL: 'http://localhost:8081/api/v1/students/',
  adminReportURL: 'http://localhost:8081/api/v1/report/admin/',
  studentReportURL: 'http://localhost:8081/api/v1/report/student/',
  addressURL: 'http://localhost:8081/api/v1/address/',
  studentTypeURL: 'http://localhost:8081/api/v1/typeOfStudent/',
  addressTypeURL: 'http://localhost:8081/api/v1/typeOfHousing/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
