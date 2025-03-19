import type { IAdvantage } from '~/@types/advantages';

export const advantages: IAdvantage[] = [
    {
        title: 'Free Shipping',
        description: 'Order above $200',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 19V7M14 19H16M14 19H9M14 7C14 4.79086 12.2091 3 10 3H6C3.79086 3 2 4.79086 2 7V15C2 16.8652 3.27667 18.4323 5.00384 18.875M14 7H17.2091C17.7172 7 18.2063 7.1934 18.577 7.54093L21.3679 10.1574C21.7712 10.5355 22 11.0636 22 11.6165V17C22 18.1046 21.1046 19 20 19M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19M20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19M9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 18.958 5.00129 18.9163 5.00384 18.875M9 19C9 17.8954 8.10457 17 7 17C5.93742 17 5.06838 17.8286 5.00384 18.875"
                          stroke="currentColor" stroke-width="1.5"/>
                    <path d="M10 8L8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 12L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
    },
    {
        title: 'Money-back',
        description: '30 days guarantee',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="4" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 10 14)" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 17 13)" fill="currentColor"/>
                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 5 13)" fill="currentColor"/>
                </svg>`,
    },
    {
        title: 'Secure Payments',
        description: 'Secured by Stripe',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8H8M16 8C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12C4 9.79086 5.79086 8 8 8M16 8V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V8M12 16V14"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>`,
    },
    {
        title: '24/7 Support',
        description: 'Phone and Email support',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>`,
    },
];
