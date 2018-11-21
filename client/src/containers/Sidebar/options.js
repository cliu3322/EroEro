const options = [
  {
    key: 'ecommerce',
    label: 'sidebar.ecommerce',
    leftIcon: 'ion-bag',
    children: [
      {
        key: 'shop',
        label: 'sidebar.shop',
      },
      {
        key: 'cart',
        label: 'sidebar.cart',
      },
      {
        key: 'checkout',
        label: 'sidebar.checkout',
      },
      {
        key: 'card',
        label: 'sidebar.cards',
      },
    ],
  },
  {
    key: 'blankPage',
    label: 'sidebar.blankPage',
    leftIcon: 'ion-document',
  },
  {
    key: 'authCheck',
    label: 'sidebar.authCheck',
    leftIcon: 'ion-document',
  },
];
export default options;
