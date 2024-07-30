
type TExampleItem = {
    name: string,
    orderId: number,
    content: unknown
}

//====================================================================


export const _example: TExampleItem[] = [
    {
        name: 'buy-step',
        orderId: 0,
        content: {
            messages: [
                {
                    fontWeight: 'normal',
                    textTransform: 'none',
                    remark: 'How yo Buy a'
                },
                {
                    weight: 'bold',
                    textTransform: 'uppercase',
                    remark: 'maggpie wellness kitchen'
                },
                {
                    weight: 'normal',
                    textTransform: 'none',
                    remark: 'in 4 easy steps'
                }
            ],
            items: [
                {
                    name: 1,
                    remark: 'Talk to our executive and discuss your requirement.'
                },
                {
                    name: 2,
                    remark: 'Receive a design presentation with detailed cost sheet.'
                }
            ]
        }
    },
    {
        name: 'footer',
        orderId: 0,
        content: 'Copyright 2024'
    }
]
