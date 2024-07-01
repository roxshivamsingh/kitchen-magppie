export type TComponentTypography = {
    main?: string,
    secondary?: string,
    subtitle?: string,
    action?: string,
    description?: string,
    secondaryDescription?: string
}
export type TComponentLink = { icon?: string, bg?: string, illustration?: string }

export type TComponentSectionImageItem = { link: string, typography?: TComponentTypography }

export type TComponentSection = {
    links: TComponentLink,
    typography?: TComponentTypography,
    isGallery?: boolean,
    images?: TComponentSectionImageItem[],
}

export type TComponent = {
    orderId: number,
    typeography: TComponentTypography,
    value: string,
    links?: TComponentLink,
    sections?: TComponentSection
}



export const _CUSTOMER_SITE_COMPONENTS: TComponent[] = [
    {
        orderId: 0,
        value: 'first-component',
        typeography: {
            main: 'MAGPPIE',
            secondary: 'an exclusive compilation for Ms Monica Chaudhary',
            subtitle: 'Habitat Architects • India'
        },
        links: { bg: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/customer%2Ftopbanner.png?alt=media&token=817c748a-5dc2-4011-a9af-681d3f749744' }
    },
    {
        orderId: 1,
        value: 'planet-component',
        typeography: {
            main: 'MAGPPIE',
            secondary: 'for people and planet',
            subtitle: 'We design and build products that bring wellness at home',
            description: 'At MAGPPIE™, we\'re committed to create products that make everyday life healthier and more sustainable. Our goal is to offer solutions that prioritise personal well-being while caring for our planet.'
        },
        links: { bg: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/customer%2Fsecondbanner.png?alt=media&token=13414136-43c0-4229-b78e-dfeea598b079' }
    },
    {
        orderId: 2,
        value: 'rating-component',
        typeography: {
            subtitle: 'Wellness Kitchens',
            main: 'MAGPPIE',
            secondary: '1',
            description: " Magppie Kitchens are world's first wellness kitchens, fully built in sanitised stone - Magppie Silverstone™",
            secondaryDescription: "These kitchens are fully washable, most hygienic and world's most strongest."
        },
        links: {
            illustration: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/customer%2Fintro.png?alt=media&token=5dedc173-9df0-4b34-be40-11162784f284'
        }
    },
    {
        orderId: 2,
        value: 'transform-component',
        typeography: {
            main: 'Transform Your Kitchen, Transform Your',
            secondary: 'Health',
            subtitle: 'Upgrade to Magppie Wellness Kitchen'
        },
    }

]
