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
export interface Date {
  year: number;
  month: number;
  day: number;
}
export interface CourseWork {
  description: string;
  id: string;
  courseId: string;
  dueDate: Date;
  updateTime: string;
  scheduledTime: string;
  title: string;
  materials: Material[];
  creatorUserId: string;
  dueTime?: string;
  alternateLink: string;
  individualStudentsOptions: IndividualStudentsOptions;
  submissionModificationMode: SubmissionModificationMode;
  creationTime: string;
  workType: WorkType;
  assignment: Assigment;
  state: string;
  maxPoints: number;
  topicId: string;
  associatedWithDeveloper: boolean;
}

export interface Material {
  form: Form;
  youtubeVideo: YouTubeVideo;
  link: Link;
  driveFile: SharedDriveFile;
}
export interface Assigment {
  studentWorkFolder: DriveFolder;
}
export enum WorkType {
  COURSE_WORK_TYPE_UNSPECIFIED,
  ASSIGNMENT,
  SHORT_ANSWER_QUESTION,
  MULTIPLE_CHOICE_QUESTION
}
export enum AssigneeMode {
  ASSIGNEE_MODE_UNSPECIFIED,
  ALL_STUDENTS,
  INDIVIDUAL_STUDENTS
}
export enum SubmissionModificationMode {
  SUBMISSION_MODIFICATION_MODE_UNSPECIFIED,
  MODIFIABLE_UNTIL_TURNED_IN,
  MODIFIABLE
}
export interface IndividualStudentsOptions {
  studentIds: string[];

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
export enum SharedMode {
  UNKNOWN_SHARE_MODE,
  VIEW,
  EDIT,
  STUDENT_COPY
}
export interface SharedDriveFile {
  driveFile: DriveFile;
  shareMode: SharedMode;

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
