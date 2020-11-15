import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.builder.group({
        subject: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required])
    });
  }

  onSubmit(form){
    window.location.href = "mailto:dzhivan.mirzoyan@gmail.com?subject=" + form.subject + "&body=" + form.body;
    this.form.reset();
  }

}
