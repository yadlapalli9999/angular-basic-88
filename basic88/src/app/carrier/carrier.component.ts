import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {

  headerList;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getHeader().subscribe((res)=>{
      
         this.headerList = res;
    })

  }

}
