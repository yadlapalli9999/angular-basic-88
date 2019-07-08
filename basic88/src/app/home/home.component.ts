import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
headerList;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getHeader().subscribe((res)=>{
      
         this.headerList = res;
    })

  }

}
