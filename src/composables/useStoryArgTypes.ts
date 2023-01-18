export const slotArgType = (slot: string = 'default', description: null|string = null) => {
    return {
        control: false,
        description: description === null ? `The ${slot} slot.` : description,
        table: {
            category: 'slots',
            type: {
                summary: `slot:${slot}`
            }
        }
    }
}

export const nullBoolean = [null, true, false]

export const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan orci sed lorem congue aliquet. Donec mollis est at commodo commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sollicitudin nisi sed dolor bibendum, cursus elementum eros imperdiet. Suspendisse sollicitudin pretium est, vitae sodales urna pulvinar ac. Curabitur tincidunt sollicitudin ex, et ultrices justo vulputate ac.'
