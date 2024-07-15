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
    items: TComponentTypography[],
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
    items: [],
    // sections: INIT_CUSTOMER_SITE_COMPONENT_SECTIONS,
    at: { created: new Date(), updated: new Date() }
}

const _prev = INIT_CUSTOMER_SITE_COMPONENT

export const _LANDING_COMPONENTS: TComponentItem[] = [
    {
        ..._prev,
        orderId: 0,
        name: 'reel-component',
        typography: {
            ..._prev.typography,
            main: 'MAGPPIE',
            description: 'Welcome to the <b>SPIRITUAL</b> heart of your Home.',
        },
        links: {
            ..._prev.links,
            bg: `${STORAGE_BASE_URL}/landing%2Freel.png?alt=media&token=dce817bf-3eef-4e3e-a38f-dae1940e84de`
        },
    },
    {
        ..._prev,
        orderId: 2,
        name: 'carousel-component',
        isGallery: true,
        typography: {
            ..._prev.typography,
            main: 'What makes <b>MAGPPIE</b> different?',
        },
        gallery: [
            {
                link: `${STORAGE_BASE_URL}/landing%2F1720890827657.png?alt=media&token=5753a5fe-ceae-4f35-812a-dc03cf110d0c`,
                typography: _prev.typography
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2F1720890827656.jpeg?alt=media&token=bd2f6ff1-ab3e-4c34-b622-29ef1f70fe4d`,
                typography: _prev.typography
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2F1720890827655.jpeg?alt=media&token=059413ab-d77b-4099-9da5-29afaf827630`,
                typography: _prev.typography
            },
        ],
    },
    {
        ..._prev,
        orderId: 3,
        name: 'kitchen-toggle-component',
        typography: {
            ..._prev.typography,
            main: 'Switch to wellness Kitchen.',
            secondary: 'Tired of unhealthy Kitchen?',
        }
    },
    {
        ..._prev,
        orderId: 4,
        name: 'scope-component',
        typography: {
            ..._prev.typography,
            main: 'What makes <strong>MAGPPIE</strong> different?',
        },
        isGallery: true,
        gallery: [
            {
                link: `${STORAGE_BASE_URL}/landing%2Fanti-fungal.png?alt=media&token=ff934359-fae6-44d2-b136-f277482e0dc2`,
                typography: {
                    ..._prev.typography,
                    main: 'Anti Fungal'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fanti-virus.png?alt=media&token=252f9665-08ad-4dde-b36c-8d2db5449889`,
                typography: {
                    ..._prev.typography,
                    main: 'Anti Virus'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fanti-bacteria.png?alt=media&token=e13d457a-8988-40fd-92cb-62a4e37268b6`,
                typography: {
                    ..._prev.typography,
                    main: 'Anti Bacterial'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fanti-germ.png?alt=media&token=46e4172d-2a58-4aa4-8da0-d198fbbf995d`,
                typography: {
                    ..._prev.typography,
                    main: 'Anti Germs'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fscratch-proof.png?alt=media&token=49840dbc-04f6-45b0-8fde-4a3a8e1aaf81`,
                typography: {
                    ..._prev.typography,
                    main: 'Scratch Proof'
                }
            },
            {
                link: `${STORAGE_BASE_URL}/landing%2Fstain-proof.png?alt=media&token=e65c4ad5-7bac-4c16-9d63-da4134ffe494`,
                typography: {
                    ..._prev.typography,
                    main: 'Stain Proof'
                }
            },

        ]
    },
    {
        ..._prev,
        orderId: 5,
        name: 'feedback-component',
        typography: {
            ..._prev.typography,
            main: 'The ones who already <b><em>SWITCHED</em></b>',
        },
        isGallery: true,
        gallery: [
            {
                typography: {
                    ..._prev.typography,
                    main: 'Ranbir Kapoor',
                    subtitle: 'Actor',
                },
                link: `${STORAGE_BASE_URL}/landing%2Franbir.png?alt=media&token=08d63e95-7d2e-4d73-bf50-56aa64798556`,
            },
            {
                typography: {
                    ..._prev.typography,
                    main: 'Harbhajan Singh',
                    subtitle: 'Cricketer, Indian Team',
                },
                link: `${STORAGE_BASE_URL}/landing%2Fharbajan.png?alt=media&token=74829590-e717-4eba-8083-0f2f310be870`,
            },
            {
                typography: {
                    ..._prev.typography,
                    main: 'MS Dhoni',
                    subtitle: 'Captain, Indian Cricket Team',

                },
                link: `${STORAGE_BASE_URL}/landing%2Fdhoni.png?alt=media&token=d37f9726-a18e-48d3-9877-e08afd77d4a3`,
            },
            {
                typography: {
                    ..._prev.typography,
                    main: 'Arshad Warsi',
                    subtitle: 'Actor',
                },
                link: `${STORAGE_BASE_URL}/landing%2Fwrshad.png?alt=media&token=cc70d597-a871-4490-874f-be4435e826b4`,
            },
        ]
    },
    {
        ..._prev,
        orderId: 6,
        name: 'explore-gallery-component',
        isGallery: true,
        typography: {
            ..._prev.typography,
            main: 'Explore our <i>Gallery</i>'
        },
        gallery: [
            {
                link: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`,
                typography: _prev.typography,
            },
            {
                link: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`,
                typography: _prev.typography,
            },
            {
                link: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`,
                typography: _prev.typography,
            },
            {
                link: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`,
                typography: _prev.typography,
            },
        ]
    },

    {
        ..._prev,
        orderId: 7,
        name: 'step-component',
        typography: {
            ..._prev.typography,
            main: 'How to buy a <b>MAGPPIE</b> Wellness Kitchen in 4 easy steps?',
            action: 'Request a call',
        },
        items: [
            {
                ..._prev.typography,
                main: 'Talk to our executive and discuss your requirement.'
            },
            {
                ..._prev.typography,
                main: 'Receive a design presentation with detailed cost sheet.'
            },
            {
                ..._prev.typography,
                main: 'Approve the design and commericals to start production.',
            },
            {
                ..._prev.typography,
                main: 'Once the Kitchen is ready our teams world bring it and install at your specified location.',
            }
        ]
    },
    {
        ..._prev,
        orderId: 8,
        name: 'faq-component',
        typography: {
            ..._prev.typography,
            main: 'FAQs',
            action: 'view more'
        },
        items: [
            {
                ..._prev.typography,
                main: 'lorem ipsum dolor sit ame.',
                description: 'Description is here'
            },
            {
                ..._prev.typography,
                main: 'lorem ipsum dolor sit ame.',
                description: 'Description is here'
            },
            {
                ..._prev.typography,
                main: 'lorem ipsum dolor sit ame.',
                description: 'Description is here'

            }
        ]
    },
    {
        ..._prev,
        orderId: 9,
        name: 'footer-component',
        typography: {
            ..._prev.typography,
            main: 'Privacy Policy',
            action: 'Back to top',
            description: '©Copyright 2016 All Rights Reserved by Magppie'
        },
        items: [
            {
                ..._prev.typography,
                secondary: 'about-us',
                main: 'About'
            },
            {
                ..._prev.typography,
                main: 'Gallery',
                secondary: 'gallery',
            },
            {
                ..._prev.typography,
                main: 'Products',
                secondary: 'products',
            },
            {
                ..._prev.typography,
                main: 'Get in Touch',
                secondary: 'get-in-touch',
            },
            {
                ..._prev.typography,
                main: 'Meet our Clients',
                secondary: 'meet-our-clients',
            },
            {
                ..._prev.typography,
                main: 'Request a Call',
                secondary: 'request-a-call',

            },
            {
                ..._prev.typography,
                main: 'Testimonials',
                secondary: 'testimonials',

            },
            {
                ..._prev.typography,
                main: 'Request a Call Back',
                secondary: 'request-a-call-back',
            },
        ],
    },

]

// console.log(_LANDING_COMPONENTS)

// NOTE: Lagacy Cms/Landing Page;
export const _CUSTOMER_SITE_COMPONENTS: TComponentItem[] = [
    {
        ..._prev,

        orderId: 0,
        name: 'first-component',
        typography: {
            ..._prev.typography,
            main: 'MAGPPIE',
            secondary: 'an exclusive compilation for Ms Monica Chaudhary',
            subtitle: 'Habitat Architects • India'
        },
        links: {
            ..._prev.links,
            bg: `${STORAGE_BASE_URL}/customer%2Ftopbanner.png?alt=media&token=817c748a-5dc2-4011-a9af-681d3f749744`
        },
        at: { created: new Date(), updated: new Date() }
    },
    {
        ..._prev,

        orderId: 1,
        name: 'planet-component',
        typography: {
            ..._prev.typography,
            main: 'MAGPPIE',
            secondary: 'for people and planet',
            subtitle: 'We design and build products that bring wellness at home',
            description: 'At MAGPPIE™, we\'re committed to create products that make everyday life healthier and more sustainable. Our goal is to offer solutions that prioritise personal well-being while caring for our planet.'
        },
        links: {
            ..._prev.links,
            bg: `${STORAGE_BASE_URL}/customer%2Fsecondbanner.png?alt=media&token=13414136-43c0-4229-b78e-dfeea598b079`
        },
        at: { created: new Date(), updated: new Date() }


    },
    {
        ..._prev,

        orderId: 2,
        name: 'rating-component',
        typography: {
            ..._prev.typography,
            subtitle: 'Wellness Kitchens',
            main: 'MAGPPIE',
            secondary: '1',
            description: " Magppie Kitchens are world's first wellness kitchens, fully built in sanitised stone - Magppie Silverstone™",
            secondaryDescription: "These kitchens are fully washable, most hygienic and world's most strongest."
        },
        links: {
            ..._prev.links,
            illustration: `${STORAGE_BASE_URL}/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284`
        },
        at: { created: new Date(), updated: new Date() }

    },
    {
        ..._prev,

        orderId: 3,
        name: 'transform-component',
        typography: {
            ..._prev.typography,

            main: 'Transform Your Kitchen, Transform Your',
            secondary: 'Health',
            subtitle: 'Upgrade to Magppie Wellness Kitchen'
        },
        at: { created: new Date(), updated: new Date() }

    }

]
