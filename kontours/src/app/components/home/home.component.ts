import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TaskService } from '../../services/task.service';

import { Task } from '../../models/task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  task: Task = {
    name :'',
    score: '' ,
    message:'',
   };

  tasks: Task[];
  editState: boolean = false;
  taskToEdit: Task;

  constructor(public taskService: TaskService) { }

  ngOnInit() {

    this.taskService.getTasks().subscribe(tasks => {
      //console.log(tasks);
      this.tasks = tasks;
    });
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
