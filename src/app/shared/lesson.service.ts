import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";

import { Lesson } from './lesson';

@Injectable()
export class LessonService {

  private _lessons: Subject<Lesson[]> = new Subject();
  private lessons : Lesson[];

  constructor(private http: Http) { 

    // Load initial data
    this.http.get('./assets/lessons.json')
      .map(response => this.toLessons(response.json()))
      .subscribe(lessons => { 
        this.lessons = lessons;
        this._lessons.next(this.lessons);
      });
  }

  getLessons() {
    return this._lessons.asObservable();
  }

  getLesson(id: number) {
    return this.getLessons()
      .map(lessons => lessons.find(lesson => lesson.id == id));
  }

  checkLesson(lesson: Lesson) {
    let i = this.lessons.findIndex(item => item.id === lesson.id);
    this.lessons[i].completed = ! this.lessons[i].completed;
    this._lessons.next(this.lessons);
  }

  toLessons(itens: any[]): Lesson[] {
    let lessons = itens.map( item => {
      return this.toLesson(item);
    });
    return lessons;
  }

  toLesson(item: any): Lesson {
    return new Lesson(
      item.id,
      item.number,
      item.title,
      item.front,
      item.back,
      item.completed
    );
  }

}
