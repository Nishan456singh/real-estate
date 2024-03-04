import instagram from '@/public/assets/icons/instagram.png';
import tiktok from '@/public/assets/icons/tiktok.png';
import facebook from '@/public/assets/icons/facebook.png';


export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',   
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }

  export const socialLinks = [
    {
      name: 'TikTok',
      iconUrl: tiktok,
      link: 'https://www.tiktok.com',
    },
    {
      name: 'Facebook',
      iconUrl: facebook,
      link: 'https://www.facebook.com',
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com',
    },
    
];