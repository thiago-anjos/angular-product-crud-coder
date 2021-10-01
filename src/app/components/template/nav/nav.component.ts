import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
  menuItems: Routes = [];

  constructor(private router: Router) {}

  getMenuItems = (this.menuItems = this.router.config);

  ngOnInit(): void {
    this.getMenuItems;
  }
}
