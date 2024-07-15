

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
    label: 'My Account',
    route: '/profile',
  },
  {
    label: 'Men',
    route: '/men',
  },
  {
    label: 'Women',
    route: '/women',
  }, {
    label: 'Kids',
    route: '/kids',
  },
  {
    label: 'Help',
    route: '/contact',
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
