import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number;
  serverStatus: string;

  constructor() {
    this.serverId = this.getRandomInt(1, 100);
    this.setServerStatus();
  }

  setServerStatus() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
