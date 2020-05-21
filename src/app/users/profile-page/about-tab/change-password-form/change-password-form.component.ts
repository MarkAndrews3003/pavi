import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GetAuthUserPipe} from '../../../../shared/pipes/get-auth-user.pipe';
import {UsersService} from '../../../../core/services/users.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {
  changePasswordForm: FormGroup;
  passwordsMatch = true;
  newOldPasswordsMatch = false;
  isSubmitted = false;

  @Output('back') back = new EventEmitter();

  constructor(
    private getAuthUser: GetAuthUserPipe,
    private fb: FormBuilder,
    private usersService: UsersService,
    private toastr: ToastrService
  ) {
    this.changePasswordForm = this.fb.group({
      old_pass: ['', Validators.required],
      confirm_password: ['', Validators.required],
      new_pass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  comparePasswords() {
    this.passwordsMatch = this.newPass.value === this.confirmPass.value;
    this.compareNewOldPasswords();
  }

  compareNewOldPasswords() {
    this.newOldPasswordsMatch = this.newPass.value && this.oldPass.value && this.newPass.value === this.oldPass.value;
  }

  changePassword() {
    this.isSubmitted = true;
    if (this.changePasswordForm.valid && !this.newOldPasswordsMatch && this.passwordsMatch) {
      this.usersService.changePassword(this.changePasswordForm.value).subscribe(dt => {
        this.toastr.success('Password has been changed successfully');
      });
    }
  }

  backToMainForm() {
    this.back.emit();
  }

  get oldPass(): AbstractControl {
    return this.changePasswordForm.get('old_pass');
  }

  get newPass(): AbstractControl {
    return this.changePasswordForm.get('new_pass');
  }

  get confirmPass(): AbstractControl {
    return this.changePasswordForm.get('confirm_password');
  }

}
