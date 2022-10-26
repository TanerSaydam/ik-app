import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date = new Observable<string>((res)=> {
    setInterval(()=> {res.next(new Date().toString())},1000)
  })
  constructor() { }

  ngOnInit(): void {
    
  }

}
