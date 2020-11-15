export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyBeu1QgLqhkreB34hs3tvh2sPryv8pDp6Y',
    authDomain: 'fb-goo-api.firebaseapp.com',
    databaseURL: 'https://fb-goo-api.firebaseio.com',
    projectId: 'fb-goo-api',
    storageBucket: 'fb-goo-api.appspot.com',
    messagingSenderId: '1020513677714',
    appId: '1:1020513677714:web:c79ee8ffaad1701a49114b',
    measurementId: 'G-PPT30G5V7L',
    clientId:
      '1020513677714-ofv47efcialie29s5vrn6clgc4fdphc6.apps.googleusercontent.com',
    discoveryDocs: [
      'https://classroom.googleapis.com/$discovery/rest?version=v1',
    ],
    scope: [
      'email',
      'profile',
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
