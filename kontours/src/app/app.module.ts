import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TasksComponent } from './components/tasks/tasks.component';

import { TaskService } from './services/task.service';
import { AddTaskComponent } from './components/add-task/add-task.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeadingComponent } from './components/heading/heading.component';




const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    HomeComponent,
    HeadingComponent,

 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
