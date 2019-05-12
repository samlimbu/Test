import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewDetailComponent } from './post-view-detail.component';

describe('PostViewDetailComponent', () => {
  let component: PostViewDetailComponent;
  let fixture: ComponentFixture<PostViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
