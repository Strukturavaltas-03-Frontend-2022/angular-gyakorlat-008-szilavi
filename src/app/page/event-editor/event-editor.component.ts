import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {
  // 1. Kiolvasni az id paramétert az URL-ből.
  // 2. Ezzel a paraméterrel meghívni az EventService.get metódust.
  event$: Observable<Event> = this.activatedRoute.params.pipe(
    switchMap((params) => this.eventService.get(params['id']))
  );

  eventId: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params['id'];
      console.log(this.eventId);
    });
  }

  onUpdate(form: NgForm, event: Event): void {
    if (this.eventId > 0) {
      console.log(this.eventId);
      this.eventService
        .update(event)
        .subscribe((event) => this.router.navigate(['']));
    } else if (this.eventId === 0) {
      this.eventService
        .create(event)
        .subscribe((event) => this.router.navigate(['']));
    }
  }
}
