import {environment} from '../../../environments/environment';
import {OwlOptions} from 'ngx-owl-carousel-o';

export const API_URL = environment.apiUrl;

export const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const NAVBAR_LINKS = [
  {name: 'Home', route: '/'},
  {name: 'About us', route: '/users/about'},
  {name: 'Contact us', route: '/users/contact-us'},
  {name: 'Find job', route: '/users/find-job'},
];


export const OWL_CAROUSEL_OPTIONS: OwlOptions = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  nav: true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  navSpeed: 700,
  margin: 20,
  startPosition: 8,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 2
    },
    940: {
      items: 2
    }
  },
};
