import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddTaskComponent implements OnInit {
  task: Task = {
   name :'',
   score: '' ,
   message:'',
  };
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.task.name != '' && this.task.score != ''&& this.task.message != '') {
      this.taskService.addTask(this.task);
      this.task.name = '';
      this.task.score = '';
      this.task.message= '';
    }
  }

}
