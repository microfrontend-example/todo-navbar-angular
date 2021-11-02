import { Component } from '@angular/core';
import { nameApp$ } from '@visma/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'navbar';
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = nameApp$.subscribe((value: string) => {
      this.title = value;
    });
  }
}
