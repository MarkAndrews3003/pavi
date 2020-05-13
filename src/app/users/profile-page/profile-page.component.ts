import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../../core/services/users.service';
import {GetAuthUserPipe} from '../../shared/pipes/get-auth-user.pipe';
import {API_URL} from '../../core/constants/general';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  changePasswordForm: FormGroup;
  profileImgTextForm: FormGroup;
  coverImgForm: FormGroup;
  profileForm: FormGroup;
  showChangePass = false;
  showChangeEmail = false;
  showEditProfileForm = false;
  showProfileImgTextControls = true;
  authUser;
  profileImage = 'assets/images/profile-page-2.svg';
  coverImage = 'assets/images/profile-page.png';

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    public router: Router,
    private usersService: UsersService,
    private getAuthUser: GetAuthUserPipe
  ) {
    this.changePasswordForm = this.fb.group({});
    this.profileForm = this.fb.group({
      country: ['', Validators.required],
      phone: ['', Validators.required],
      // gender: ['', Validators.required],
      // password: ['', Validators.required],
      // email: ['', Validators.required],

    });
    this.profileImgTextForm = this.fb.group({
      avatar: ['']
    });
    this.coverImgForm = this.fb.group({
      cover: ['']
    });
  }

  ngOnInit(): void {
    this.authUser = this.getAuthUser.transform();
    if (this.authUser.avatar) {
      this.profileImage = `${API_URL}uploads/avatars/${this.authUser.avatar}`;
    }
    if (this.authUser.cover) {
      this.coverImage = `${API_URL}uploads/covers/${this.authUser.cover}`;
    }
  }

  showChangePassForm() {
    this.showChangePass = !this.showChangePass;
  }

  showChangeEmailForm() {
    this.showChangeEmail = !this.showChangeEmail;
  }

  toggleProfileImgText() {
    this.showProfileImgTextControls = !this.showProfileImgTextControls;
  }


  changeProfileImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileImgTextForm.patchValue({
        avatar: file
      });

      const formData = new FormData();
      formData.append('user_id', this.authUser._id);
      formData.append('avatar', file);

      this.usersService.uploadProfileImg(formData).subscribe((dt: any) => {
        localStorage.setItem('token', dt.token);
        this.authUser = this.getAuthUser.transform();
        this.profileImage = `${API_URL}uploads/avatars/${this.authUser.avatar}`;
      });
    }
  }

  changeCoverImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('user_id', this.authUser._id);
      formData.append('cover', file);
      this.usersService.uploadCoverImg(formData).subscribe((dt: any) => {
        localStorage.setItem('token', dt.token);
        this.authUser = this.getAuthUser.transform();
        this.coverImage = `${API_URL}uploads/covers/${this.authUser.cover}`;
      });
    }
  }

  saveProfileDetails() {
    console.log(this.profileForm.value)
  }


}
