import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {API_URL, OWL_CAROUSEL_OPTIONS} from '../../../../core/constants/general';
import {GetAuthUserPipe} from '../../../../shared/pipes/get-auth-user.pipe';
import {UsersService} from '../../../../core/services/users.service';
import {ToastrService} from 'ngx-toastr';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-about-tab',
    templateUrl: './about-tab.component.html',
    styleUrls: ['./about-tab.component.css']
})
export class AboutTabComponent implements OnInit {

    authUser;

    profileForm: FormGroup;

    showChangePass = false;
    showChangeEmail = false;
    showEditProfileForm = false;


    constructor(
        private fb: FormBuilder,
        private getAuthUser: GetAuthUserPipe,
        private usersService: UsersService,
        private toastr: ToastrService
    ) {

        this.profileForm = this.fb.group({
            country: [{value: '', disabled: !this.showEditProfileForm}, Validators.required],
            phone: [{value: 'n/a', disabled: !this.showEditProfileForm}, Validators.required],
            gender: [{value: '', disabled: true}, Validators.required],
            birthday: [{value: 'n/a', disabled: true}, Validators.required],
            email: [{value: '', disabled: true}, Validators.required],

        });


    }

    ngOnInit(): void {
        this.authUser = this.getAuthUser.transform();
        this.profileForm.patchValue(this.authUser)
        console.log(this.authUser)

    }

    showChangePassForm() {
        this.showChangePass = !this.showChangePass;
    }

    showChangeEmailForm() {
        this.showChangeEmail = !this.showChangeEmail;
    }


    saveProfileDetails() {
        this.usersService.updateProfileInfo({
            ...this.profileForm.value, ...{user_id: this.authUser._id}
        }).subscribe((dt: any) => {
            this.toastr.success('The profile changes has been saved successfully');
            localStorage.setItem('token', dt.token);
            this.authUser = this.getAuthUser.transform();
        });
    }

    editProfileForm() {
        this.showEditProfileForm = true;
        this.profileForm.get('country').enable();
        this.profileForm.get('phone').enable();
    }


    backToMainForm() {
        this.showChangePass = false;
        this.showChangeEmail = false;
        this.authUser = this.getAuthUser.transform();
        this.profileForm.patchValue(this.authUser);
    }


}
