import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  private color: string = 'red';
  private color1: string = 'green';
  private color2: string = 'blue';
  private color3: string = 'purple';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.color = 'red';
}


   @HostListener('window:keydown', ['$event']) windowClick($event) {
       console.log($event.keyCode);

    const key = $event.keyCode || $event.which;
      switch (key) {
          case 37:
          this.changeColor(this.color);
          break;
      case 39:
        this.changeColor(this.color1);
          break;
      case 38:
        this.changeColor(this.color2);
          break;
      case 40:
        this.changeColor(this.color3);
          break;
      default:
          break;
      } 
  
   }


   private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
