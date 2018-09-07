import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "app";

  ngOnChanges(){
    console.log('ngOnChanges function');
  }

  ngOnInit(){
    console.log('ngOnInit()');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit()');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit()');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy()');
  }

  submit(){
    console.log('submit');
  }


  // Repeat LifeCycleHooks
  ngDoCheck(){
    console.log('ngDoCheck()');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked()');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked()');
  }

}
