import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  headerList;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getHeader().subscribe((res)=>{
      
         this.headerList = res;
    })

  }

}
