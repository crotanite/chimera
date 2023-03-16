import { Sizes } from '../../theme'

export interface FlexParentProps {
    flex?: boolean|Sizes<boolean>
    flexDirection?: string|Sizes<string>
    flexItems?: string|Sizes<string>
    flexJustify?: string|Sizes<string>
    flexWrap?: string|Sizes<string>
}

const defaultOptions = ['flexDirection', 'flexItems', 'flexJustify', 'flexWrap']
export const itemsOptions = ['start', 'center', 'end', 'baseline', 'stretch']
export const justifyOptions = ['start', 'center', 'end', 'between', 'around', 'evenly']
export const directionOptions = ['row', 'col', 'row-reverse', 'col-reverse']
export const wrapOptions = ['wrap', 'wrap-reverse', 'nowrap']

export default function useFlexParentProps (includeProps: Array<string> = defaultOptions) {
    return {
        ...(includeProps.includes('flex') ? {
            flex: {
                type: Boolean,
                default: false,
            },
        } : {}),
        ...(includeProps.includes('flexDirection') ? {
            flexDirection: {
                type: [String, Object],
                default: undefined,
            },
        } : {}),
        ...(includeProps.includes('flexItems') ? {
            flexItems: {
                type: [String, Object],
                default: undefined,
            },
        } : {}),
        ...(includeProps.includes('flexJustify') ? {
            flexJustify: {
                type: [String, Object],
                default: undefined,
            },
        } : {}),
        ...(includeProps.includes('flexWrap') ? {
            flexWrap: {
                type: [String, Object],
                default: undefined,
            },
        } : {}),
    }
}

export function flexParentArgs (props: FlexParentProps, includeProps: Array<string> = defaultOptions) {
    return {
        ...(includeProps.includes('flex') ? {
            flex: props.flex,
        } : {}),
        ...(includeProps.includes('flexDirection') ? {
            flexDirection: props.flexDirection,
        } : {}),
        ...(includeProps.includes('flexItems') ? {
            flexItems: props.flexItems,
        } : {}),
        ...(includeProps.includes('flexJustify') ? {
            flexJustify: props.flexJustify,
        } : {}),
        ...(includeProps.includes('flexWrap') ? {
            flexWrap: props.flexWrap
        } : {}),
    }
}

export function flexParentArgTypes (props: FlexParentProps, includeProps: Array<string> = defaultOptions) {
    return {
        ...(includeProps.includes('flex') ? {
            flex: {
                control: { type: 'boolean' },
                description: 'Whether this component is a flex element.',
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.flex
                    },
                    type: {
                        summary: 'boolean'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('flexDirection') ? {
            flexDirection: {
                control: 'select',
                description: 'Control the direction of the items.',
                options: directionOptions,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.flexDirection
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('flexItems') ? {
            flexItems: {
                control: 'select',
                description: 'How items are positioned along the cross axis of the container.',
                options: itemsOptions,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.flexItems
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('flexJustify') ? {
            flexJustify: {
                control: 'select',
                description: 'How items are positioned along the main axis of the container.',
                options: justifyOptions,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.flexJustify
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('flexWrap') ? {
            flexWrap: {
                control: 'select',
                description: 'Control how the items wrap.',
                options: wrapOptions,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.flexWrap
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
    }
}
