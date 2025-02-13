import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  createPostForm = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true }),
    content: new FormControl<string>('', { nonNullable: true }),
  });

  onSubmit() {
    if (this.createPostForm.valid) {
      const postData = this.createPostForm.value;
      console.log('Post Data:', postData);
      // You can add your logic to handle the form submission here
    }
  }
}
