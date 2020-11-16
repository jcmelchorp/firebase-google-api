import { Observable } from 'rxjs';

import { UserProfile } from './classroom.model';

export class CourseInfo {
  id?: string;
  name: string;
  state: string;
  desc: string;
  descHeading: string;
  owner: Observable<UserProfile[]>;
  teachers: Observable<UserProfile[]>;
  section: string;
  createdDate: Date;
  update: Date;
  guardEnable: boolean;
  link: string;

}
