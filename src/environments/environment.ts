// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
      // Ver tu dirección de correo electrónico
      'email',
      // Consultar tu información personal, incluida la que has compartido públicamente
      'profile',
      // Asociar tu identidad a tu información personal en Google
      'openid',
      // Administrar tus clases de Google Classroom
      'https://www.googleapis.com/auth/classroom.courses',
      // Ver tus clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.courses.readonly',
      // Ver los tutores de estudiantes de tus clases de Google Classroom
      'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
      // Ver y administrar los tutores de estudiantes de tus clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.guardianlinks.students',
      // Administrar las listas de tus clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.rosters',
      // Ver las listas de tus clases de Google Classroom
      'https://www.googleapis.com/auth/classroom.rosters.readonly',
      // Ver las direcciones de correo electrónico de las personas de tus clases
      'https://www.googleapis.com/auth/classroom.profile.emails',
      // Ver las fotos de perfil de las personas de tus clases
      'https://www.googleapis.com/auth/classroom.profile.photos',
      // Ver tus tutores de Google Classroom
      'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',
      // Administrar el trabajo del curso y las calificaciones de los estudiantes
      // en las clases de Google Classroom que impartes; ver el trabajo del curso
      // y las calificaciones en las clases que administras.
      'https://www.googleapis.com/auth/classroom.coursework.students',
      // Ver y gestionar notificaciones de Google Classroom
      'https://www.googleapis.com/auth/classroom.announcements',
      // Ver instrucciones del trabajo asignado por los profesores en tus
      // clases de Google Classroom
      'https://www.googleapis.com/auth/classroom.course-work.readonly',
      // Ver los trabajos y las calificaciones de los alumnos de las clases que impartes
      // o administras en Google Classroom.
      'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',
      // Ver los trabajos y las calificaciones de los cursos de Google Classroom
      'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',
      // Ver los trabajos y las calificaciones de los cursos de Google Classroom
      'https://www.googleapis.com/auth/classroom.coursework.me',
      // Ver notificaciones de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.announcements.readonly',
      // Ver, editar y crear material de trabajo de clase en Google Classroom
      'https://www.googleapis.com/auth/classroom.courseworkmaterials',
      // Ver todo el material de trabajo de tus clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly',
      // Ver, crear y editar temas en Google Classroom
      'https://www.googleapis.com/auth/classroom.topics',
      // Ver temas en Google Classroom
      // 'https://www.googleapis.com/auth/classroom.topics.readonly',
      // Recibir notificaciones sobre tus datos de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.push-notifications',
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
