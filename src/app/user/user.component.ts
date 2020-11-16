import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input() user: firebase.User;
  constructor() { }

  ngOnInit(): void {
  }

}
