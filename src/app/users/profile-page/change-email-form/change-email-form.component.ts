import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GetAuthUserPipe} from '../../../shared/pipes/get-auth-user.pipe';
import {UsersService} from '../../../core/services/users.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-change-email-form',
  templateUrl: './change-email-form.component.html',
  styleUrls: ['./change-email-form.component.css']
})
export class ChangeEmailFormComponent implements OnInit {

  authUser;
  emailsMatch = true;
  newOldEmailsMatch = false;
  changeEmailForm: FormGroup;
  isSubmitted = false;

  @Output('back') back = new EventEmitter();

  constructor(
    private getAuthUser: GetAuthUserPipe,
    private fb: FormBuilder,
    private usersService: UsersService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.authUser = this.getAuthUser.transform();
    this.changeEmailForm = this.fb.group({
      old_email: [this.authUser.email, Validators.required],
      new_email: ['', Validators.required],
      confirm_email: ['', Validators.required]
    });
  }

  changeEmail() {
    console.log(this.changeEmailForm.valid)
    this.isSubmitted = true;
    if (this.changeEmailForm.valid && this.emailsMatch && !this.newOldEmailsMatch) {
      this.usersService.changeEmail(this.changeEmailForm.value).subscribe(dt => {
        this.toastr.success('Email has been changed successfully');
      });
    }
  }

  compareEmails() {
    this.compareNewOldEmails();
    this.emailsMatch = this.confirmEmail.value === this.newEmail.value;
  }

  compareNewOldEmails() {
    this.newOldEmailsMatch = this.newEmail.value && this.oldEmail.value && this.newEmail.value === this.oldEmail.value;
  }

  backToMainForm() {
    this.back.emit();
  }


  get oldEmail() {
    return this.changeEmailForm.get('old_email');
  }

  get newEmail() {
    return this.changeEmailForm.get('new_email');
  }

  get confirmEmail() {
    return this.changeEmailForm.get('confirm_email');
  }

}
