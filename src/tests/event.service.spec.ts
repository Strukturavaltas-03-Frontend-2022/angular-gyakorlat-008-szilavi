import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EventService } from '../app/service/event.service';


describe('EventService', () => {
  let service: EventService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    }).compileComponents();
    service = TestBed.inject(EventService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('EventService.getAll should exist', () => {
    expect(service.getAll).toBeTruthy();
  });

  it('EventService.get should exist', () => {
    expect(service.get).toBeTruthy();
  });

  it('EventService.update should exist', () => {
    expect(service.update).toBeTruthy();
  });

  it('EventService.create should exist', () => {
    expect(service.create).toBeTruthy();
  });

  it('EventService.remove should exist', () => {
    expect(service.remove).toBeTruthy();
  });

  it('should get the correct Event', () => {
    service.get(125).subscribe((data: any) => {
      expect(data.name).toBe('ng-nl');
    });

    const req = httpMock.expectOne(`https://nettuts.hu/jms/feladat/events/125`);
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Skidoo Event'
    });

    httpMock.verify();
  });

  it('should delete the correct Event', () => {
    service.remove(888).subscribe((data: any) => {
      expect(data).toBe(888);
    });

    const req = httpMock.expectOne(
      `https://nettuts.hu/jms/feladat/events/888`,
    );
    expect(req.request.method).toBe('DELETE');

    req.flush(888);

    httpMock.verify();
  });

  it('should post the correct Event', () => {
    service.create({ id: 1024, name: "BB Congress", date: "4/25/2040", time: "11am", location: 'Hello Hotel' }).subscribe((data: any) => {
        expect(data.name).toBe('name');
      });

    const req = httpMock.expectOne(
      `https://nettuts.hu/jms/feladat/events`,
    );
    expect(req.request.method).toBe('POST');

    req.flush({
      name: 'name',
    });

    httpMock.verify();
  });

  it('should patch the correct Event', () => {
    service.update({ id: 525,
      name: "React vs. Angular Congress",
      date: "4/15/2037",
      time: "9am",
      location: "The Palatial America Hotel"}).subscribe((data: any) => {
        expect(data.firstname).toBe('firstname');
      });

    const req = httpMock.expectOne(
      `https://nettuts.hu/jms/feladat/events/525`,
    );
    expect(req.request.method).toBe('PATCH');

    req.flush({
      name: 'name',
    });

    httpMock.verify();
  });
});

