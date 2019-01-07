const options = [
  {
    key: 'ChatRoom',
    label: 'sidebar.chatRoom',
    leftIcon: 'ion-document',
  },
  {
    key: 'MasterChatRoom',
    label: 'sidebar.masterChatRoom',
    leftIcon: 'ion-document',
  },
  {
    key: 'AddRecord',
    label: 'sidebar.addRecord',
    leftIcon: 'ion-document',
  },
  {
    key: 'recordList',
    label: 'sidebar.recordList',
    leftIcon: 'ion-document',
  },
  {
    key: 'recordPage',
    label: 'sidebar.recordPage',
    leftIcon: 'ion-document',
  },
  {
    key: 'uielements',
    label: 'sidebar.uiElements',
    leftIcon: 'ion-leaf',
    children: [
      {
        key: 'op_collapse',
        label: 'sidebar.collapse',
      },
    ],
  },
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
