import { Observable } from 'rxjs';

import { UserProfile } from './classroom.model';

export class CourseInfo {
  id?: string;
  name: string;
  state: string;
  desc: string;
  descHeading: string;
  owner: UserInfo;
  teachers: UserInfo[];
  section: string;
  createdDate: Date;
  update: Date;
  guardEnable: boolean;
  link: string;
}

export class UserInfo {
  name: string;
  email: string;
  photoUrl: string;
}
