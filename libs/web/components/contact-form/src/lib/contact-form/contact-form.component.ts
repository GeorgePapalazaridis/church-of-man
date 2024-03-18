import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';
import { Router } from '@angular/router';

@Component({
  selector: 'church-of-man-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    TreeSelectModule,
    ToastModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _router: Router
  ) {}

  get firstName() {
    return this.contactForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.contactForm.get('lastName') as FormControl;
  }
  get email() {
    return this.contactForm.get('email') as FormControl;
  }
  get message() {
    return this.contactForm.get('message') as FormControl;
  }
  get phone() {
    return this.contactForm.get('phone') as FormControl;
  }
  get title() {
    return this.contactForm.get('title') as FormControl;
  }

  ngOnInit() {
    this.initilizeForm();
  }

  private initilizeForm(): void {
    this.contactForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      phone: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  navigateToHome() {
    this._router.navigate(['/pages/home']);
  }
}
