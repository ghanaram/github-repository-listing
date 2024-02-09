import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,UserInputComponent,ReposListComponent],
    imports: [HttpClientTestingModule],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserInputComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
