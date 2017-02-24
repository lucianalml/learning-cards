import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { MdSidenav } from '@angular/material';

import { Lesson } from '../../shared/lesson';
import { LessonService } from '../../shared/lesson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav') 
  sidenav : MdSidenav;

  selectedLesson: Lesson;
  lessons: Lesson[] = [];
  concluded = 0;

  constructor(private router: Router,
    private lessonService: LessonService) { }

  ngOnInit() {

    this.lessonService.getLessons()
      .subscribe(lessons => {
        this.lessons = lessons;
        this.selectedLesson = lessons[0];
        this.concluded = (100 * this.lessons.filter(lesson => lesson.completed).length) / this.lessons.length;
    });

  }

  checkLesson(i: number){
    this.lessonService.checkLesson(this.lessons[i]);
  }

  showLesson(i: number){
    console.log("home component - lesson" + this.lessons[i].id);
    this.selectedLesson = this.lessons[i];
    // this.router.navigate(['/card/', this.lessons[i].id]);
    this.sidenav.close();
  }

  onClicked(){
    this.sidenav.toggle();
  }


}
