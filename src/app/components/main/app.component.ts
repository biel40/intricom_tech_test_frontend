import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'intricom_tech_test_frontend';

  private _router: Router = inject(Router);

  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public goToClients() {
    this._router.navigate(['/clients']);
  }
}
