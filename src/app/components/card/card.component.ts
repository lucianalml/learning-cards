import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])  
  ]

})
export class CardComponent implements OnInit {

  userName: string = "Wilfried Ifland";
  avatarUrl: string;

  progress: number = 0;
  lesson: string = "Lesson 1 of 6";

  title: string = "Simple text";

  contentHTML: string = `
    <p>Ut nostrud nostrud laboris reprehenderit officia reprehenderit irure. Reprehenderit id magna irure sit. Incididunt aute elit dolore pariatur do irure. Mollit officia est adipisicing voluptate tempor pariatur quis nulla minim. Sint eiusmod sint deserunt laboris Lorem eu amet do nisi minim quis aliqua.</p>

    <p>Magna do veniam do commodo ad exercitation fugiat proident elit reprehenderit occaecat do. Consectetur consectetur eu voluptate Lorem consequat sit ipsum aute eu veniam. Nostrud consectetur amet ea enim magna velit duis minim. Fugiat nulla mollit laborum sunt magna laborum. Eu pariatur sit ea nulla incididunt exercitation qui mollit. Consectetur est ut exercitation cillum ut exercitation sunt.</p>
  `;

  flip: string = 'inactive';
  cardClass: string = '';

  constructor() { }

  ngOnInit() {
  }
  
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    if (this.flip == 'active'){
      this.cardClass = 'hide';
    } else {
      this.cardClass = '';
    }
    
  }

}
