import { TestBed, inject } from '@angular/core/testing';

import { SocketReceiveService } from './socket-receive.service';

describe('SocketReceiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketReceiveService]
    });
  });

  it('should be created', inject([SocketReceiveService], (service: SocketReceiveService) => {
    expect(service).toBeTruthy();
  }));
});
