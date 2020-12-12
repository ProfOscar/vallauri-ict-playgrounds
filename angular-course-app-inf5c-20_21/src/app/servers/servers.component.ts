import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '- digita qui il nome del nuovo server -';
  serverCreated: boolean = false;
  servers = ['Laplace', 'Pascal'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    // this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    // this.serverName = '- digita qui il nome del nuovo server -';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  /*
  onUpdateServerName(event: any) {
    // console.log(event.target.value);
    this.serverName = event.target.value;
  }
  */

}
