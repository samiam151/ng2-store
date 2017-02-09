import { Component, OnInit } from '@angular/core';

@Component({
    template: `<h1 class="errorMessage">404'd</h1>`,
    styles: [`
        .errorMessage { color: tomato; font-size: 3em; }   
    `]
})
export class Error404Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}