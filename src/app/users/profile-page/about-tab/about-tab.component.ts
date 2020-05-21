import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {API_URL, OWL_CAROUSEL_OPTIONS} from '../../../core/constants/general';
import {GetAuthUserPipe} from '../../../shared/pipes/get-auth-user.pipe';
import {UsersService} from '../../../core/services/users.service';
import {ToastrService} from 'ngx-toastr';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css']
})
export class AboutTabComponent implements OnInit {

  authUser;
  changePasswordForm: FormGroup;
  changeEmailForm: FormGroup;

  profileForm: FormGroup;

  showChangePass = false;
  showChangeEmail = false;
  showEditProfileForm = false;

  owlOptions: OwlOptions = OWL_CAROUSEL_OPTIONS;
  showAllJobs = false;


  constructor(
    private fb: FormBuilder,
    private getAuthUser: GetAuthUserPipe,
    private usersService: UsersService,
    private toastr: ToastrService
  ) {

    this.profileForm = this.fb.group({
      country: ['', Validators.required],
      phone: ['', Validators.required],
      // gender: ['', Validators.required],
      // password: ['', Validators.required],
      // email: ['', Validators.required],

    });



  }

  ngOnInit(): void {
    this.authUser = this.getAuthUser.transform();


  }

  showChangePassForm() {
    this.showChangePass = !this.showChangePass;
  }

  showChangeEmailForm() {
    this.showChangeEmail = !this.showChangeEmail;
  }






  saveProfileDetails() {
    console.log(this.profileForm.value)
    this.usersService.updateProfileInfo(this.profileForm.value).subscribe(dt => {

    });
  }



  backToMainForm() {
    this.showChangePass = false;
    this.showChangeEmail = false;
  }




}
