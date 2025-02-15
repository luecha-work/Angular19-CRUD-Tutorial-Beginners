import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  createPostForm = new FormGroup({
    // title: new FormControl<string>('', [
    //   Validators.required,
    //   Validators.minLength(6),
    //   Validators.minLength(100),
    // ]),
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ],
    }),
    content: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(3000)],
    }),
  });

  get title() {
    return this.createPostForm.controls.title.value;
  }
  // set title(value: string) {
  //   this.createPostForm.controls.title.setValue(value);
  // }
  get content() {
    return this.createPostForm.controls.content.value;
  }

  // set content(value: string) {
  //   this.createPostForm.controls.content.setValue(value);
  // }

  onSubmit() {
    console.log(this.createPostForm.value);
  }
}
