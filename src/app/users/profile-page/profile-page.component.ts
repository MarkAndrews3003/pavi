import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../../core/services/users.service';
import {GetAuthUserPipe} from '../../shared/pipes/get-auth-user.pipe';
import {API_URL, OWL_CAROUSEL_OPTIONS} from '../../core/constants/general';
import {ToastrService} from 'ngx-toastr';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {



  showProfileImgTextControls = false;
  profileImage = 'assets/images/no-profile.png';
  coverImage = 'assets/images/no-cover.png';
  profileImgTextForm: FormGroup;
  coverImgForm: FormGroup;
  aboutText = {profile_desc: ''};


  authUser;
  isLinear = false;
  currentStep = 1;




  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    public router: Router,
    private usersService: UsersService,
    private getAuthUser: GetAuthUserPipe,
    private toastr: ToastrService,

  ) {

    this.profileImgTextForm = this.fb.group({
      // avatar: [''],
      about_text: ['']
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

    this.getAboutText();
  }

  stepChanged(e) {
    this.currentStep = e.selectedIndex + 1;
  }





  changeProfileImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // this.profileImgTextForm.patchValue({
      //   avatar: file
      // });

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


  saveAboutText() {
    this.usersService.changeAboutText(this.profileImgTextForm.value).subscribe(dt => {
      this.toastr.success('Profile description has been changed successfully');
      this.aboutText.profile_desc = this.profileImgTextForm.value.about_text;
      this.showProfileImgTextControls = false;
    });
  }

  getAboutText() {
    this.usersService.getAboutText({}).subscribe((dt: any) => {
      this.aboutText = dt;

      this.profileImgTextForm.patchValue({about_text: dt.profile_desc});

    });
  }

  toggleProfileImgText() {
    this.showProfileImgTextControls = !this.showProfileImgTextControls;
  }
}
