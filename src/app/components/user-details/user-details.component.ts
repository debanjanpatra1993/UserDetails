import { Component } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  UserList: Array<any> = [];

  constructor(
    private userInfoService: UserInfoService) { }

    ngOnInit() {
      this.userDetail();
    }

  userDetail() {
    this.userInfoService.getUserDetails().subscribe((res: any) => {
        this.UserList = res;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
