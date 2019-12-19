import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //component selector
  //selector:'[app-servers]',  // property selector
  selector: 'app-servers', //class selector   
  templateUrl: './servers.component.html',
  // template : `<app-server></app-server>
  //             <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus:string ="No server was created!";
  constructor() {
    setTimeout((
    ) => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
  }
  
  onCreateServer(){
    this.serverCreationStatus = "Server was created!"
  }


}
