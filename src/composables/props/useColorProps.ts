import useGetThemeColors from '../useGetThemeColors'

export const colors = useGetThemeColors()
export const variants = ['filled', 'pale', 'transparent']

export interface ColorProps {
    color: null|string
    variant: null|string
    backgroundColor?: null|string
    borderColor?: null|string
    textColor?: null|string
    shadowColor?: null|string
    hoverColor?: null|string
    hoverBackgroundColor?: null|string
    hoverBorderColor?: null|string
    hoverTextColor?: null|string
    hoverShadowColor?: null|string
}

export default function useColorProps (includeProps: Array<string> = ['variant', 'color']) {
    return {
        ...(includeProps.includes('color') ? {
            color: {
                type: String,
                default: undefined,
                validator: (v: string) => colors.includes(v)
            },
        } : {}),
        ...(includeProps.includes('variant') ? {
            variant: {
                type: String,
                default: undefined,
                validator: (v: string) => variants.includes(v)
            },
        } : {}),
        ...(includeProps.includes('backgroundColor') ? {
            backgroundColor: {
                type: String,
                default: undefined,
            },
        } : {}),
        ...(includeProps.includes('borderColor') ? {
            borderColor: {
                type: String,
                default: undefined,
            },
        } : {}),
        ...(includeProps.includes('textColor') ? {
            textColor: {
                type: String,
                default: undefined,
            },
        } : {}),
        ...(includeProps.includes('shadowColor') ? {
            shadowColor: {
                type: String,
                default: undefined,
            },
        } : {}),
        // hoverColor: {
        //     type: String,
        //     default: props.hoverColor ?? null,
        //     validator: (v: string) => colors.includes(v)
        // },
        // hoverBackgroundColor: {
        //     type: String,
        //     default: props.hoverBackgroundColor ?? null
        // },
        // hoverBorderColor: {
        //     type: String,
        //     default: props.hoverBorderColor ?? null
        // },
        // hoverTextColor: {
        //     type: String,
        //     default: props.hoverTextColor ?? null
        // },
        // hoverShadowColor: {
        //     type: String,
        //     default: props.hoverShadowColor ?? null
        // },
    }
}

export function colorArgs (props: ColorProps, includeProps: Array<string> = ['variant', 'color']) {
    return {
        ...(includeProps.includes('variant')
            ? { variant: props.variant }
            : {}
        ),
        ...(includeProps.includes('color')
            ? { color: props.color }
            : {}
        ),
        ...(includeProps.includes('backgroundColor')
            ? { backgroundColor: props.backgroundColor }
            : {}
        ),
        ...(includeProps.includes('borderColor')
            ? { borderColor: props.borderColor }
            : {}
        ),
        ...(includeProps.includes('textColor')
            ? { textColor: props.textColor }
            : {}
        ),
        ...(includeProps.includes('shadowColor')
            ? { shadowColor: props.shadowColor }
            : {}
        ),
        ...(includeProps.includes('hoverColor')
            ? { hoverColor: props.hoverColor }
            : {}
        ),
        ...(includeProps.includes('hoverBackgroundColor')
            ? { hoverBackgroundColor: props.hoverBackgroundColor }
            : {}
        ),
        ...(includeProps.includes('hoverBorderColor')
            ? { hoverBorderColor: props.hoverBorderColor }
            : {}
        ),
        ...(includeProps.includes('hoverTextColor')
            ? { hoverTextColor: props.hoverTextColor }
            : {}
        ),
        ...(includeProps.includes('hoverShadowColor')
            ? { hoverShadowColor: props.hoverShadowColor }
            : {}
        ),
    }
}

export function colorArgTypes (props: ColorProps, includeProps: Array<string> = ['variant', 'color']) {
    return {
        ...(includeProps.includes('color') ? {
            color: {
                control: 'select',
                description: 'The color to apply.',
                options: colors,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.color)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('variant') ? {
            variant: {
                control: 'select',
                description: 'Apply a different style.',
                options: variants,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.variant)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('backgroundColor') ? {
            backgroundColor: {
                control: 'select',
                description: 'The background color to apply. Overrides the `color` prop.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.backgroundColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('borderColor') ? {
            borderColor: {
                control: 'select',
                description: 'The border color to apply. Overrides the `color` prop.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.borderColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('textColor') ? {
            textColor: {
                control: 'select',
                description: 'The text color to apply. Overrides the `color` prop.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.textColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('shadowColor') ? {
            shadowColor: {
                control: 'select',
                description: 'The shadow color to apply. Overrides the `color` prop.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.shadowColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('hoverColor') ? {
            hoverColor: {
                control: 'select',
                description: 'The color to apply on hover. Defaults to the `color` prop.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.hoverColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('hoverBackgroundColor') ? {
            hoverBackgroundColor: {
                control: 'select',
                description: 'The background color to apply on hover. Overrides the `hoverColor` prop.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.hoverBackgroundColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('hoverBorderColor') ? {
            hoverBorderColor: {
                control: 'select',
                description: 'The border color to apply on hover. Overrides the `hoverColor` prop.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.hoverBorderColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('hoverTextColor') ? {
            hoverTextColor: {
                control: 'select',
                description: 'The text color to apply on hover. Overrides the `hoverColor` prop.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.hoverTextColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('hoverShadowColor') ? {
            hoverShadowColor: {
                control: 'select',
                description: 'The shadow color to apply on hover.',
                options: colors.concat(null),
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: String(props.hoverShadowColor)
                    },
                    type: {
                        summary: 'string'
                    },
                }
            },
        } : {}),
    }
}
