export type TComponentTypography = {
    main?: string,
    secondary?: string,
    subtitle?: string,
    action?: string
}
export type TComponentLink = { icon?: string, bg?: string, illustration?: string }

export type TComponentSectionImageItem = { link: string, typography?: TComponentTypography }

export type TComponentSection = {
    link: TComponentLink,
    typography?: TComponentTypography,
    isGallery?: boolean,
    images?: TComponentSectionImageItem[],
}

export type TComponent = {
    orderId: number,
    typeography: TComponentTypography,
    sections: TComponentSection
}
