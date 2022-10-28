import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    
  ]
})
export class HomeComponent implements OnInit {
  
  constructor(    
  ) { }  

  ngOnInit(): void {
    // for (let i = 0; i < 500; i++) {
    //   this._http.get<any>("http://localhost:3000/proffession").pipe(
    //     takeUntil(this.unSubscribe)
    //   ).subscribe({
    //     next: (res) => console.log(res),
    //     error: (err) => console.log(err)
    //   })
    // }
  }




}
