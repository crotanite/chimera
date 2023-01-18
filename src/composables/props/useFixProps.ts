export interface FixProps {
    keepPrefixLoading?: boolean
    keepSuffixLoading?: boolean
    prefix?: null|Function
    suffix?: null|Function
}

export default function useFixProps (includeProps: Array<string> = ['prefix', 'suffix']) {
    return {
        ...(includeProps.includes('keepPrefixLoading') ? {
            keepPrefixLoading: {
                type: Boolean,
                default: false,
            },
        } : {}),
        ...(includeProps.includes('keepSuffixLoading') ? {
            keepSuffixLoading: {
                type: Boolean,
                default: false,
            },
        } : {}),
        ...(includeProps.includes('prefix') ? {
            prefix: {
                type: Function,
                default: undefined,
            },
        } : {}),
        ...(includeProps.includes('suffix') ? {
            suffix: {
                type: Function,
                default: undefined,
            },
        } : {}),
    }
}

export function fixArgs (props: FixProps, includeProps: Array<string> = ['prefix', 'suffix']) {
    return {
        ...(includeProps.includes('keepPrefixLoading') ? {
            keepPrefixLoading: props.keepPrefixLoading,
        } : {}),
        ...(includeProps.includes('keepSuffixLoading') ? {
            keepSuffixLoading: props.keepSuffixLoading,
        } : {}),
        ...(includeProps.includes('prefix') ? {
            prefix: props.prefix,
        } : {}),
        ...(includeProps.includes('suffix') ? {
            suffix: props.suffix,
        } : {}),
    }
}

export function fixArgTypes (props: FixProps, includeProps: Array<string> = ['prefix', 'suffix']) {
    return {
        ...(includeProps.includes('keepPrefixLoading') ? {
            keepPrefixLoading: {
                control: { type: 'boolean' },
                description: 'A custom spinner can be used instead of the prefix when loading. This prop keeps the prefix, instead of replacing it with the spinner.',
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.keepPrefixLoading
                    },
                    type: {
                        summary: 'boolean'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('keepSuffixLoading') ? {
            keepSuffixLoading: {
                control: { type: 'boolean' },
                description: 'A custom spinner can be used instead of the suffix when loading. This prop keeps the suffix, instead of replacing it with the spinner.',
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.keepSuffixLoading
                    },
                    type: {
                        summary: 'boolean'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('prefix') ? {
            prefix: {
                control: false,
                description: 'The prefix to add.',
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.prefix)
                    },
                    type: {
                        summary: 'null|function'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('suffix') ? {
            suffix: {
                control: false,
                description: 'The suffix to add.',
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.suffix)
                    },
                    type: {
                        summary: 'null|function'
                    },
                }
            },
        } : {}),
    }
}
