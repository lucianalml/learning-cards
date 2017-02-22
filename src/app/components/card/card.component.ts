import { Component, OnInit } from '@angular/core';

import { Lesson } from '../../shared/lesson';
import { LessonService } from '../../shared/lesson.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  userName: string = "Wilfried Ifland";
  avatarUrl: string;
  progress: number = 0;

  flipFront:string ='';
  flippedBack:string ='';

  lesson = new Lesson();

  constructor(private lessonService: LessonService) { }

  ngOnInit() {

    // TODO Get card id from route
    this.lessonService.getLesson(1)
      .subscribe(lesson => {
        this.lesson = lesson;
    });

  }
  
  toggleFlip() {
   if(this.flipFront == ''){
     this.flipFront = 'flippedFront';
    } else {
      this.flipFront ='';
    }
  
  if(this.flippedBack == ''){
     this.flippedBack ='flippedBack';

    } else {
       this.flippedBack ='';
    }

  }

}
