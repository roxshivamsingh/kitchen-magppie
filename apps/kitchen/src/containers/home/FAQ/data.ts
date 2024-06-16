interface FAQ {
    id: number
    title: string
    description: string
}

export const faqData: FAQ[] = [
    {
        id: 1,
        title: 'What is Flowbite?',
        description:
            'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
    },
    {
        id: 2,
        title: 'Is there a Figma file available?',
        description:
            'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
    },
    {
        id: 3,
        title: 'What are the differences between Flowbite and Tailwind UI?',
        description:
            'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
    },
]
