export const options: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export interface SpacingProps {
    spacing?: null|number
    spacingX?: null|number
    spacingY?: null|number
}

export default function useSpacingProps(includeProps: Array<string> = ['spacing']) {
    return {
        ...(includeProps.includes('spacing') ? {
            spacing: {
                type: Number,
                default: undefined,
                validator: (v: number) => options.includes(v),
            },
        } : {}),

        ...(includeProps.includes('spacingX') ? {
            spacingX: {
                type: Number,
                default: undefined,
                validator: (v: number) => options.includes(v),
            },
        } : {}),

        ...(includeProps.includes('spacingY') ? {
            spacingY: {
                type: Number,
                default: undefined,
                validator: (v: number) => options.includes(v),
            },
        } : {}),
    }
}

export function spacingArgs (props: SpacingProps, includeProps: Array<string> = ['spacing']) {
    return {
        ...(includeProps.includes('spacing') ? {
            spacing: props.spacing
        } : {}),
        ...(includeProps.includes('spacingX') ? {
            spacingX: props.spacingX
        } : {}),
        ...(includeProps.includes('spacingY') ? {
            spacingY: props.spacingY
        } : {}),
    }
}

export function spacingArgTypes (props: SpacingProps, includeProps: Array<string> = ['spacing']) {
    return {
        ...(includeProps.includes('spacing') ? {
            spacing: {
                control: 'select',
                description: 'The spacing to apply.',
                options: options,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: Number(props.spacing)
                    },
                    type: {
                        summary: 'number'
                    },
                }
            }
        } : {}),
        ...(includeProps.includes('spacingX') ? {
            spacingX: {
                control: 'select',
                description: 'The horizontal spacing to apply. Overrides `spacing`.',
                options: options,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: Number(props.spacingX)
                    },
                    type: {
                        summary: 'number'
                    },
                }
            }
        } : {}),
        ...(includeProps.includes('spacingY') ? {
            spacingY: {
                control: 'select',
                description: 'The vertical spacing to apply. Overrides `spacing`.',
                options: options,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: Number(props.spacingY)
                    },
                    type: {
                        summary: 'number'
                    },
                }
            }
        } : {}),
    }
}
