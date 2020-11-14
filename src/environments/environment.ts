// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyC26297xuaMm1k9O7gcwbHDTryjMr8IDNI',
    authDomain: 'proyecto-calli.firebaseapp.com',
    databaseURL: 'https://proyecto-calli.firebaseio.com',
    projectId: 'proyecto-calli',
    storageBucket: 'proyecto-calli.appspot.com',
    messagingSenderId: '778108325369',
    appId: '1:778108325369:web:f9727f1ea9bca74a7c8128',
    measurementId: 'G-RCWFBBG3HQ',
    clientId:
      '778108325369-a31ggkimq8qjkv4lgnojlnsc260qmtgs.apps.googleusercontent.com',
    discoveryDocs: [
      'https://classroom.googleapis.com/$discovery/rest?version=v1',
    ],
    scope: [
      'email',
      'profile',
      'openid',
      // View and manage announcements in Google Classroom
      // 'https://www.googleapis.com/auth/classroom.announcements',

      // View announcements in Google Classroom
      'https://www.googleapis.com/auth/classroom.announcements.readonly',

      // Manage your Google Classroom classes
      // 'https://www.googleapis.com/auth/classroom.courses',

      /*   // View your Google Classroom classes */
      'https://www.googleapis.com/auth/classroom.courses.readonly',

      // Manage your course work and view your grades in Google Classroom
      // 'https://www.googleapis.com/auth/classroom.coursework.me',

      // View your course work and grades in Google Classroom
      'https://www.googleapis.com/auth/classroom.coursework.me.readonly',

      // Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer
      // 'https://www.googleapis.com/auth/classroom.coursework.students',

      // View course work and grades for students in the Google Classroom classes you teach or administer
      'https://www.googleapis.com/auth/classroom.coursework.students.readonly',

      // See, edit, and create classwork materials in Google Classroom
      // 'https://www.googleapis.com/auth/classroom.courseworkmaterials',

      // See all classwork materials for your Google Classroom classes
      'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly',

      // View your Google Classroom guardians
      'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',

      // View and manage guardians for students in your Google Classroom classes
      // 'https://www.googleapis.com/auth/classroom.guardianlinks.students',

      // View guardians for students in your Google Classroom classes
      'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',

      // View the email addresses of people in your classes
      'https://www.googleapis.com/auth/classroom.profile.emails',

      // View the profile photos of people in your classes
      'https://www.googleapis.com/auth/classroom.profile.photos',

      // Receive notifications about your Google Classroom data
      // 'https://www.googleapis.com/auth/classroom.push-notifications',

      // Manage your Google Classroom class rosters
      // 'https://www.googleapis.com/auth/classroom.rosters',

      // View your Google Classroom class rosters
      'https://www.googleapis.com/auth/classroom.rosters.readonly',
      // View your course work and grades in Google Classroom
      'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',

      // View course work and grades for students in the Google Classroom classes you teach or administer
      'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',

      // See, create, and edit topics in Google Classroom

      // 'https://www.googleapis.com/auth/classroom.topics',

      /*   // View topics in Google Classroom */
      'https://www.googleapis.com/auth/classroom.topics.readonly',
    ].join(' '),
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
