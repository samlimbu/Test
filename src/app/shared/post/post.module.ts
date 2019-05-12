import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostViewComponent } from './post-view/post-view-component/post-view.component';
import { PostCreateComponent } from './post-create/post-create-component/post-component';
import { PostViewDetailComponent } from './post-view-detail/post-view-detail/post-view-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostCreateComponent,
    PostViewComponent,
    PostViewDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PostCreateComponent,
    PostViewComponent,
    PostViewDetailComponent
  ]
})
export class PostModule { }
