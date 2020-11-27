import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fragment: boolean=false;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.fragment.subscribe((fragment: string|undefined) => {
      this.fragment = fragment=='login'?false:fragment===undefined?false:fragment==null?false:true;
      
    });
  }
}
