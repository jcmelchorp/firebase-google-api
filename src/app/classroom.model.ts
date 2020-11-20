/** A Course in Classroom. */
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
/**
 * Course work created by a teacher for students of the course.
 */
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
  workType: CourseWorkType;
  assignment: Assigment;
  state: State;
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

export enum State {
  COURSE_WORK_STATE_UNSPECIFIED,
  PUBLISHED,
  DRAFT,
  DELETED
}
/** State of the course. If unspecified, the default state is `PROVISIONED`. */
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
export enum CourseWorkType {
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
export enum SubmissionState {
  NEW, CREATED, TURNED_IN, RETURNED, RECLAIMED_BY_STUDEN

}
export interface IndividualStudentsOptions {
  studentIds: string[];

}

export interface StudentSubmission {
  courseId: string;
  courseWorkId: string;
  id: string;
  userId: string;
  creationTime: string;
  updateTime: string;
  state: SubmissionState;
  late: boolean;
  draftGrade: number;
  assignedGrade: number;
  alternateLink: string;
  courseWorkType: CourseWorkType;
  associatedWithDeveloper: boolean;
  //submissionHistory: SubmissionHistory[];
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
