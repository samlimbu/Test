import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  @Input() obj;
  constructor() { }

  ngOnInit() {
  }

}
