import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <list-employee></list-employee>

`
  //  <button [disabled] = 'isDisabled'> Click Me</button> //property binding
  // <h1>Hello {{getFullName()}}</h1> //interpolation
})
export class AppComponent {
  isBold: boolean = false;
  fontSize: number = 30;
  isItalic: boolean = true;
  name: string = 'Tom';

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
