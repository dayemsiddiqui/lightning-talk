import { TestBed } from '@angular/core/testing';

import { FormlyFieldsService } from './formly-fields.service';

describe('FormlyFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormlyFieldsService = TestBed.get(FormlyFieldsService);
    expect(service).toBeTruthy();
  });
});
