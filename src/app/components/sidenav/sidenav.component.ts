import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  lessons = [
    { title: 'Lesson 1',
      completed: false },
    { 
      title: 'Lesson 2',
      completed: false 
    }
  ];

  concluded = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.lessons);

    this.concluded = (100 * this.lessons.filter(lesson => lesson.completed).length) / this.lessons.length;

  }

  checkLesson(i: number){
    this.lessons[i].completed = ! this.lessons[i].completed;
    this.concluded = (100 * this.lessons.filter(lesson => lesson.completed).length) / this.lessons.length;
  }

}
