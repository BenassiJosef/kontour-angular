import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Task } from '../models/task';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;

  constructor(public afs:AngularFirestore) {
<<<<<<< HEAD
    this.tasksCollection = this.afs.collection('reviews', ref => ref.orderBy('score'));
=======
    this.tasksCollection = this.afs.collection('reviews');
>>>>>>> cf8d49e2d0e3161541a1f7a08506434515583ed8
    // this.tasks = this.afs.collection('tasks').valueChanges();
    this.tasks = this.tasksCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Task;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getTasks() {
    return this.tasks; 
  }

  addTask(task: Task) {
    this.tasksCollection.add(task);
  }

  deleteTask(task: Task) {
    this.taskDoc = this.afs.doc(`reviews/${task.id}`);
    this.taskDoc.delete();
  }

  updateTask(task: Task) {
    this.taskDoc = this.afs.doc(`reviews/${task.id}`);
    this.taskDoc.update(task);
  }
}
