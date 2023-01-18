export interface MultipleIconsProps {
    keepLeftIconWhenLoading?: boolean
    keepRightIconWhenLoading?: boolean
    leftIcon?: null|Function
    rightIcon?: null|Function
}

export default function useMultipleIconsProps (props: MultipleIconsProps = null) {
    return {
        keepLeftIconWhenLoading: {
            type: Boolean,
            default: props === null || !props.hasOwnProperty('keepLeftIconWhenLoading') ? false : props.keepLeftIconWhenLoading,
        },

        keepRightIconWhenLoading: {
            type: Boolean,
            default: props === null || !props.hasOwnProperty('keepRightIconWhenLoading') ? false : props.keepRightIconWhenLoading,
        },

        leftIcon: {
            type: Function,
            default: props === null || !props.hasOwnProperty('leftIcon') ? null : props.leftIcon,
        },

        rightIcon: {
            type: Function,
            default: props === null || !props.hasOwnProperty('rightIcon') ? null : props.rightIcon,
        },
    }
}

export function multipleIconsArgs (props: MultipleIconsProps) {
    return {
        keepLeftIconWhenLoading: props.keepLeftIconWhenLoading,
        keepRightIconWhenLoading: props.keepRightIconWhenLoading,
        leftIcon: props.leftIcon,
        rightIcon: props.rightIcon
    }
}

export function multipleIconsArgTypes (props: MultipleIconsProps) {
    return {
        keepLeftIconWhenLoading: {
            control: { type: 'boolean' },
            description: 'A custom spinner can be used instead of the icon when loading. This prop keeps the left icon, instead of replacing it with the spinner.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.keepLeftIconWhenLoading
                },
                type: {
                    summary: 'boolean'
                },
            }
        },
        keepRightIconWhenLoading: {
            control: { type: 'boolean' },
            description: 'A custom spinner can be used instead of the icon when loading. This prop keeps the right icon, instead of replacing it with the spinner.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.keepRightIconWhenLoading
                },
                type: {
                    summary: 'boolean'
                },
            }
        },
        leftIcon: {
            control: false,
            description: 'The icon to show on the left side.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.leftIcon)
                },
                type: {
                    summary: 'function'
                },
            }
        },
        rightIcon: {
            control: false,
            description: 'The icon to show on the right side.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.rightIcon)
                },
                type: {
                    summary: 'function'
                },
            }
        },
    }
}
