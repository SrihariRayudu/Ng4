import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mywipro-project';
  public show: boolean = false;
  public shownotify1: boolean = false;
  public shownotify2: boolean = false;
  public search_icon: boolean = true;
  toggle() {
    this.show = !this.show;
    this.search_icon = !this.search_icon;
  }
  togglenotify1() {
    this.shownotify1 = !this.shownotify1;

   /* setTimeout(() => {
      this.shownotify1 = false;
    }, 3000);*/

  }
  togglenotify2() {
    this.shownotify2 = !this.shownotify2;

   /* setTimeout(() => {
      this.shownotify2 = false;
    }, 3000);*/

  }
}
