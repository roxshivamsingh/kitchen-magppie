import { STORAGE_BASE_URL } from "./storage"
export type TComponentTypography = {
    main: string,
    secondary: string,
    subtitle: string,
    action: string,
    description: string,
    secondaryDescription: string
}
export type TComponentLink = { icon: string, bg: string, illustration: string }

export type TComponentSectionImageItem = { link: string, typography: TComponentTypography }


export type TComponentItem = {
    orderId: number,
    id: string,
    typography: TComponentTypography,
    links: TComponentLink,
    name: string,
    isGallery: boolean,
    gallery: TComponentSectionImageItem[],
    iconLists: TComponentSectionImageItem[],
    at: { created: Date, updated: Date }
}


const INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY: TComponentTypography = {
    main: '',
    secondary: '',
    subtitle: '',
    description: '',
    secondaryDescription: '',
    action: '',
}
const INIT_CUSTOMER_SITE_COMPONENT_LINK: TComponentLink = {
    icon: '',
    bg: '',
    illustration: '',
}
// const INIT_CUSTOMER_SITE_COMPONENT_SECTIONS: TComponentSection = {
//     links: INIT_CUSTOMER_SITE_COMPONENT_LINK,
//     typography: INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
//     isGallery: false,
//     images: []
// }
export const INIT_CUSTOMER_SITE_COMPONENT: TComponentItem = {
    typography: INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
    links: INIT_CUSTOMER_SITE_COMPONENT_LINK,
    orderId: -1,
    id: '',
    name: '',
    isGallery: false,
    iconLists: [],
    gallery: [],
    // sections: INIT_CUSTOMER_SITE_COMPONENT_SECTIONS,
    at: { created: new Date(), updated: new Date() }
}


export const _LANDING_COMPONENTS: TComponentItem[] = [
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 0,
        name: 'reel-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'MAGPPIE',
        },
        links: {

            ...INIT_CUSTOMER_SITE_COMPONENT.links,
            bg: `${STORAGE_BASE_URL}/landing%2Freel.png?alt=media&token=dce817bf-3eef-4e3e-a38f-dae1940e84de`
        },
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 1,
        name: 'difference-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'What makes MAGPPIE different?',
        },
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 2,
        name: 'carousel-component',

        isGallery: true,
        gallery: [
            {
                link: `${STORAGE_BASE_URL}/landing%2F1720890827657.png?alt=media&token=5753a5fe-ceae-4f35-812a-dc03cf110d0c`,
                typography: INIT_CUSTOMER_SITE_COMPONENT.typography
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2F1720890827656.jpeg?alt=media&token=bd2f6ff1-ab3e-4c34-b622-29ef1f70fe4d`,
                typography: INIT_CUSTOMER_SITE_COMPONENT.typography
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2F1720890827655.jpeg?alt=media&token=059413ab-d77b-4099-9da5-29afaf827630`,
                typography: INIT_CUSTOMER_SITE_COMPONENT.typography
            },
        ],
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 3,
        name: 'kitchen-toggle-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'Switch to wellness Kitchen.',
            secondary: 'Tired of unhealthy Kitchen?',
        }
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 4,
        name: 'scope-component',

        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'What makes <strong>MAGPPIE</strong> different?',
        },
        isGallery: true,
        gallery: [
            {
                link: `${STORAGE_BASE_URL}/landing%2Fanti-fungal.png?alt=media&token=ff934359-fae6-44d2-b136-f277482e0dc2`,
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Anti Fungal'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fanti-virus.png?alt=media&token=252f9665-08ad-4dde-b36c-8d2db5449889`,
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Anti Virus'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fanti-bacteria.png?alt=media&token=e13d457a-8988-40fd-92cb-62a4e37268b6`,
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Anti Bacterial'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fanti-germ.png?alt=media&token=46e4172d-2a58-4aa4-8da0-d198fbbf995d`,
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Anti Germs'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fscratch-proof.png?alt=media&token=49840dbc-04f6-45b0-8fde-4a3a8e1aaf81`,
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Scratch Proof'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fstain-proof.png?alt=media&token=e65c4ad5-7bac-4c16-9d63-da4134ffe494`,
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Stain Proof'
                }
            },

        ]
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 5,
        name: 'feedback-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'The ones who already <b><em>SWITCHED</em></b>',
        },
        isGallery: true,
        gallery: [
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Ranbir Kapoor',
                    secondary: 'Actor'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Harbhajan Singh',
                    secondary: 'Cricketer, Indian Team'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'MS Dhoni',
                    secondary: 'Captian, Indian Cricket Team'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Arshad Warsi',
                    secondary: 'Actor'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Kamal Nath',
                    secondary: 'Member of Parliament, India'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Sunil Bharti Mittal',
                    secondary: 'Owner, Airtel'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Natasha Poonawala',
                    secondary: 'Philanthropist'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'Vandana Munjal',
                    secondary: 'Owner, Hero'
                }
            },
        ]
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 6,
        name: 'explore-gallery-component',
        isGallery: true,
        gallery: [
            {
                link: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`,
                typography: INIT_CUSTOMER_SITE_COMPONENT.typography,
            },
            {
                link: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`,
                typography: INIT_CUSTOMER_SITE_COMPONENT.typography,
            },
            {
                link: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`,
                typography: INIT_CUSTOMER_SITE_COMPONENT.typography,
            },
            {
                link: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`,
                typography: INIT_CUSTOMER_SITE_COMPONENT.typography,
            },
        ]
    },

    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 7,
        name: 'step-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'How to buy a <b>MAGPPIE</b> Wellness Kitchen in 4 easy steps?',
            action: 'Request a call',
        },
        gallery: [
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Talk to our executive and discuss your requirement.'
                },
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Receive a design presentation with detailed cost sheet.'
                },
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Approve the design and commericals to start production.',
                },
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Once the Kitchen is ready our teams world bring it and install at your specified location.',
                },
            }
        ]
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 8,
        name: 'faq-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'FAQs',
            action: 'view more'
        },
        gallery: [
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'lorem ipsum dolor sit ame.',
                    description: 'Description is here'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'lorem ipsum dolor sit ame.',
                    description: 'Description is here'
                }
            },
            {
                link: '',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT.typography,
                    main: 'lorem ipsum dolor sit ame.',
                    description: 'Description is here'
                }
            }
        ]
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,
        orderId: 9,
        name: 'footer-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'Privacy Policy',
            action: 'Back to top',
            description: '©Copyright 2016 All Rights Reserved by Magppie'
        },
        gallery: [
            {
                link: 'about-us',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'About'
                }
            },
            {
                link: 'gallery',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Gallery'
                }
            },
            {
                link: 'products',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Products'
                }
            },
            {
                link: 'get-in-touch',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Get in Touch'
                }
            },
            {
                link: 'meet-our-clients',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Meet our Clients'
                }
            },
            {
                link: 'request-a-call',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Request a Call'
                }
            },
            {
                link: 'testimonials',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Testimonials'
                }
            },
            {
                link: 'request-a-call-back',
                typography: {
                    ...INIT_CUSTOMER_SITE_COMPONENT_TYPOGRAPHY,
                    main: 'Request a Call Back'
                }
            },
        ],
    },

]

console.log(_LANDING_COMPONENTS)

// NOTE: Lagacy Cms/Landing Page;
export const _CUSTOMER_SITE_COMPONENTS: TComponentItem[] = [
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,

        orderId: 0,
        name: 'first-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'MAGPPIE',
            secondary: 'an exclusive compilation for Ms Monica Chaudhary',
            subtitle: 'Habitat Architects • India'
        },
        links: {
            ...INIT_CUSTOMER_SITE_COMPONENT.links,
            bg: `${STORAGE_BASE_URL}/customer%2Ftopbanner.png?alt=media&token=817c748a-5dc2-4011-a9af-681d3f749744`
        },
        at: { created: new Date(), updated: new Date() }
    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,

        orderId: 1,
        name: 'planet-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            main: 'MAGPPIE',
            secondary: 'for people and planet',
            subtitle: 'We design and build products that bring wellness at home',
            description: 'At MAGPPIE™, we\'re committed to create products that make everyday life healthier and more sustainable. Our goal is to offer solutions that prioritise personal well-being while caring for our planet.'
        },
        links: {
            ...INIT_CUSTOMER_SITE_COMPONENT.links,
            bg: `${STORAGE_BASE_URL}/customer%2Fsecondbanner.png?alt=media&token=13414136-43c0-4229-b78e-dfeea598b079`
        },
        at: { created: new Date(), updated: new Date() }


    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,

        orderId: 2,
        name: 'rating-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,
            subtitle: 'Wellness Kitchens',
            main: 'MAGPPIE',
            secondary: '1',
            description: " Magppie Kitchens are world's first wellness kitchens, fully built in sanitised stone - Magppie Silverstone™",
            secondaryDescription: "These kitchens are fully washable, most hygienic and world's most strongest."
        },
        links: {
            ...INIT_CUSTOMER_SITE_COMPONENT.links,
            illustration: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`
        },
        at: { created: new Date(), updated: new Date() }

    },
    {
        ...INIT_CUSTOMER_SITE_COMPONENT,

        orderId: 3,
        name: 'transform-component',
        typography: {
            ...INIT_CUSTOMER_SITE_COMPONENT.typography,

            main: 'Transform Your Kitchen, Transform Your',
            secondary: 'Health',
            subtitle: 'Upgrade to Magppie Wellness Kitchen'
        },
        at: { created: new Date(), updated: new Date() }

    }

]
