import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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

  submissions = [];
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.db.collection('submissions')
    .valueChanges()
    .subscribe(data => {
      this.submissions = data;
    })
  }
}
