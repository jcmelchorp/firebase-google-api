export interface Course {
  id: string;
  name: string;
  section: string;
  descriptionHeading: string;
  description: string;
  room: string;
  ownerId: string;
  creationTime: string;
  updateTime: string;
  enrollmentCode: string;
  courseState: CourseState;
  alternateLink: string;
  teacherGroupEmail: string;
  courseGroupEmail: string;
  guardiansEnabled: boolean;
  calendarId: string;
  teacherFolder: DriveFolder;
  courseMaterialSets: CourseMaterialSet[];
}
export interface Teachers {
  courseId: string;
  userId: string;
  profile: UserProfile;
}
export interface Students {
  courseId: string;
  userId: string;
  profile: UserProfile;
  studentWorkFolder: DriveFolder;

}

export interface UserProfile {
  id: string;
  name: Name;
  emailAddress: string;
  photoUrl: string;
  permissions: GlobalPermissions;
  verifiedTeacher: boolean;
}
export interface GlobalPermissions {
  permission: Permission;
}

export enum Permission {
  PERMISSION_UNSPECIFIED, CREATE_COURSE
}

export interface Name {
  givenName: string;
  familyName: string;
  fullName: string;
}

export enum CourseState {
  COURSE_STATE_UNSPECIFIED,
  ACTIVE,
  ARCHIVED,
  PROVISIONED,
  DECLINED,
  SUSPENDED,
}
export interface DriveFolder {
  id: string;
  title: string;
  alternateLink: string;
}
export interface CourseMaterialSet {
  title: string;
  materials: CourseMaterial[];
}
export interface CourseMaterial {
  driveFile: DriveFile;
  youTubeVideo: YouTubeVideo;
  link: Link;
  form: Form;
}
export interface YouTubeVideo {
  id: string;
  title: string;
  alternateLink: string;
  thumbnailUrl: string;
}
export interface DriveFile {
  id: string;
  title: string;
  alternateLink: string;
  thumbnailUrl: string;
}
export interface Link {
  url: string;
  title: string;
  thumbnailUrl: string;
}
export interface Form {
  formUrl: string;
  responseUrl: string;
  title: string;
  thumbnailUrl: string;
}
