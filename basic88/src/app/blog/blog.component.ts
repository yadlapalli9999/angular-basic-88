import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  headerList;
   constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getHeader().subscribe((res)=>{
      
         this.headerList = res;
    })

  }

}
