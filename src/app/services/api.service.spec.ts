import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: { get: jasmine.Spy };



  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);

  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch user data', () => {
    const username = 'example-user';
    const userMock = { login: 'example-user', name: 'Example User' };

    httpClientSpy.get.and.returnValue(of(userMock));

    service.getUser(username).subscribe((user) => {
      expect(user).toEqual(userMock);
    });
  });

  it('should fetch user repositories with pagination', () => {
    const username = 'example-user';
    const page = 1;
    const perPage = 10;
    const reposMock = [{ name: 'repo1' }, { name: 'repo2' }];

    httpClientSpy.get.and.returnValue(of(reposMock));

    service.getUserRepos(username, page, perPage).subscribe((repos) => {
      expect(repos).toEqual(reposMock);
    });
  });

});
