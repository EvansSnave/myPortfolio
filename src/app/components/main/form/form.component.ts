import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const URL = 'https://script.google.com/macros/s/AKfycbzrSrlFmPDMKtVAJpFlB5s0iCXClG5qXei5QkKP4A5oX6LDzZwgAb_Z79lxprC3Qmmr/exec';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required],
    });
  }

  async submitForm(): Promise<void> {
    if (this.form?.valid) {
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(this.form.value),
      })
        .then((res) => res.json())
      this.form.reset();
    }
  }

}
