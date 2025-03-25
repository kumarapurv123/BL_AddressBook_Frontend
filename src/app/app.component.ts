import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet,
     CommonModule,
    
      FormsModule
    ], // Ensure CommonModule is imported
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'AddressBook';
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/public/health-check')
      .subscribe(response => {
        this.data = response;
        console.log('API Response:', response);
      }, error => {
        console.error('API Error:', error);
      });
  }        
}
