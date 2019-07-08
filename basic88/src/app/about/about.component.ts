import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  headerList;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getHeader().subscribe((res)=>{
      
         this.headerList = res;
    })

  }

}
