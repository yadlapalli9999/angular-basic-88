import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   headerList;
  constructor(private commonService:CommonService) { }
   
  ngOnInit() {
    this.commonService.getHeader().subscribe((res)=>{
     console.log(res)
     this.headerList =res;
     //this.headerList = this.Url+this.headerList
    })
  }
  headerFunc(obj){
   console.log(obj)
  }

}
