import { Component, OnInit } from '@angular/core';

import { Lesson } from '../../shared/lesson';
import { LessonService } from '../../shared/lesson.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  lessons: Lesson[] = [];
  concluded = 0;

  constructor(private lessonService: LessonService) { }

  ngOnInit() {

    this.lessonService.getLessons()
      .subscribe(lessons => {
        this.lessons = lessons;
        this.concluded = (100 * this.lessons.filter(lesson => lesson.completed).length) / this.lessons.length;
    });

  }

  checkLesson(i: number){
    this.lessonService.checkLesson(this.lessons[i]);
  }

}
