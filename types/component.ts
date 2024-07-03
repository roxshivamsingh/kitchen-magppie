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
    action: ''
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
            bg: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/customer%2Ftopbanner.png?alt=media&token=817c748a-5dc2-4011-a9af-681d3f749744'
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
            bg: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/customer%2Fsecondbanner.png?alt=media&token=13414136-43c0-4229-b78e-dfeea598b079'
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

            illustration: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284'
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
