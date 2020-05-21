import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getNavbarLinksBasedOnUserRole'
})
export class GetNavbarLinksBasedOnUserRolePipe implements PipeTransform {

  transform(navbarLinks: any, authUser): unknown {
    // Removing unnecessary links for each user role
    if (authUser.roles.includes('company_user')) {
      navbarLinks = navbarLinks.filter(n => n.name !== 'Find job');
    } else {
      navbarLinks = navbarLinks.filter(n => n.name !== 'Find employee');
    }

    return navbarLinks;
  }

}
