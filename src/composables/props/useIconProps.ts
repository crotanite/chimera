export interface IconProps {
    icon: null|Function
    iconSide: null|'left'|'right'
    keepIconWhenLoading?: boolean
}

export default function useIconProps () {
    return {
        keepIconWhenLoading: {
            type: Boolean,
            default: false,
        },

        icon: {
            type: Function,
            default: undefined,
        },

        iconSide: {
            type: String,
            default: undefined,
            validator: (v: null|string) => v === null || ['left', 'right'].includes(v)
        },
    }
}

export function iconArgs (props: IconProps) {
    return {
        keepIconWhenLoading: props.keepIconWhenLoading,
        icon: props.icon,
        iconSide: props.iconSide
    }
}

export function iconArgTypes (props: IconProps) {
    return {
        keepIconWhenLoading: {
            control: { type: 'boolean' },
            description: 'A custom spinner can be used instead of the icon when loading. This prop keeps the icon, instead of replacing it with the spinner.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.keepIconWhenLoading
                },
                type: {
                    summary: 'boolean'
                },
            }
        },
        icon: {
            control: false,
            description: 'The icon.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.icon)
                },
                type: {
                    summary: 'function'
                },
            }
        },
        iconSide: {
            control: 'select',
            description: 'The side to show the icon on. Defaults to "left".',
            options: [null, 'left', 'right'],
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.iconSide)
                },
                type: {
                    summary: 'string'
                },
            }
        },
    }
}
