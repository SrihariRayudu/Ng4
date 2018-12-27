import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-animation-in-out',
  templateUrl: './animation-in-out.component.html',
  styleUrls: ['./animation-in-out.component.css'],
  animations: [
    trigger('parentAnimation', [
        transition('void => *', [
            query('.child', style({opacity: 0})),
            query('.child', stagger('500ms', [
                animate('100ms .1s ease-out', style({opacity: 1}))
            ]))
        ]),
        transition('* => void', [
            query('.child', style({opacity: 1})),
            query('.child', stagger('-500ms', [
                animate('100ms .1s ease-out', style({opacity: 0.2}))
            ]))
        ])
    ])]
})
export class AnimationInOutComponent { 
  
  visible = false;
}
