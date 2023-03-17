import { TestBed } from '@angular/core/testing';

import { NotificationsPopupService } from './notifications-popup.service';

describe('NotificationsPopupService', () => {
  let service: NotificationsPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
