import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  headers = [
    'Timestamp',
    'Email Address',
    'Name',
    'Title of the talk',
    'Session Abstract',
    'Presentation Slides Link',
    'Schedule',
    'Video Link'
  ];

  constructor() {}

  ngOnInit() {}
}
