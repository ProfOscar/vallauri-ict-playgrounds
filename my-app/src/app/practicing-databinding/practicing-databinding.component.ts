import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css']
})
export class PracticingDatabindingComponent implements OnInit {

  allowEnabledButton: boolean = false;
  username: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onResetUsername() {
    this.username = '';
    this.allowEnabledButton = false;
  }

  onUpdateUsername(event: any) {
    // this.username = event.target.value;
    this.allowEnabledButton = this.username != '';
  }

}
