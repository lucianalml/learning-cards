import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Params } from "@angular/router";

import { Lesson } from '../../shared/lesson';
import { LessonService } from '../../shared/lesson.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private subscription: Subscription;


  @Input()
  lesson: Lesson;
  // lessonId;
  // lesson = new Lesson();

  userName: string = "Wilfried Ifland";
  avatarUrl: string;
  progress: number = 0;

  flipFront:string ='';
  flippedBack:string ='';


  constructor(private route: ActivatedRoute,
    private lessonService: LessonService) { }

  // ngOnInit() {
  //   this.subscription = this.route.params.subscribe(params => {
  //     this.lessonId = +params['id'];

  //       console.log("card componenteee " + this.lessonId);

  //       this.lessonService.getLesson(this.lessonId)
  //         .subscribe(lesson => {
          
  //         this.lesson = lesson;
  //     });
      
  //   });

  // }

  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.lessonService.getLesson(+params['id']))
    //   .subscribe(lesson => this.lesson = lesson);
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

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
