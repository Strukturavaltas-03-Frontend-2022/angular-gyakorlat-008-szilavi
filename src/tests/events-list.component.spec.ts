import { EventService } from 'src/app/service/event.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EventsListComponent } from '../app/page/events-list/events-list.component';
import { RouterTestingModule } from "@angular/router/testing";
import { of } from 'rxjs';
import { eventList } from './eventsList';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsListComponent ],
      imports: [ HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: EventService,
          useValue: {
            getAll() {
                return of(eventList)
            },
            remove() {
                return of({})
            }
          }
        }
      ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the "add new Event button exists', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.btn-success');
    expect(button).toBeTruthy();
  });

  it('onDelete should exist', () => {
    expect(typeof component.onDelete !== 'undefined').toBeTruthy();
  });

  it('onDelete should be called', () => {
    jest.spyOn(component, 'onDelete');

    const button = fixture.debugElement.nativeElement.querySelector('.btn-danger');
    button.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onDelete).toHaveBeenCalled();
    });
  });
});
