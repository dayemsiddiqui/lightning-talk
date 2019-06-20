import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EllipsisPipe } from 'app/core/ellipsis.pipe';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-data-importer',
  templateUrl: './data-importer.component.html',
  styleUrls: ['./data-importer.component.css']
})
export class DataImporterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          let fileReader = new FileReader();
          fileReader.readAsText(file);
          fileReader.onload = () => {
            console.log('CSV Reader', fileReader.result);
          };
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        console.log('Not a valid file');
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
}
