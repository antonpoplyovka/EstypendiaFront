import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  posts = [];
  constructor(private httpPosts: HttpService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.httpPosts.getPosts().subscribe(categories => {
      this.posts = categories;
      console.log(this.posts);
    });

  }

}
