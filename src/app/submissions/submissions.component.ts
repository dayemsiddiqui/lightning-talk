import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Submission } from './submissions.interface';
import { EllipsisPipe } from 'app/core/ellipsis.pipe';
import { map, tap } from 'rxjs/operators';

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

  submissions: Submission[] = [];
  constructor(
    private db: AngularFirestore,
    private ellipsisPipe: EllipsisPipe
  ) {}

  ngOnInit() {
    this.db
      .collection<Submission>('submissions')
      .valueChanges()
      .subscribe(data => {
        this.submissions = data;
      });
  }
}
