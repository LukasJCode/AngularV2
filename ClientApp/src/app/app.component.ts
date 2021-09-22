import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <div style="padding:5px">
              <ul class="nav nav-tabs">
                  <li routerLinkActive="active" style="margin-left:5px">
                      <a routerLink="home">Home</a>
                  </li>
                  <li routerLinkActive="active" style="margin-left:10px">
                      <a routerLink="employees">Employees</a>
                  </li>
              </ul>
              <br/>
              <router-outlet></router-outlet>
            </div>

`
  //  <button [disabled] = 'isDisabled'> Click Me</button> //property binding
  // <h1>Hello {{getFullName()}}</h1> //interpolation
})
export class AppComponent {
  isBold: boolean = false;
  fontSize: number = 30;
  isItalic: boolean = true;
  name: string = 'Tom';
  userText: string = 'Lukas';

  addStyles(){
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
    }
    return styles;
  };

  onClick(): void {
    if (this.isBold)
      this.isBold = false;
    else
      this.isBold = true;
  }

}
