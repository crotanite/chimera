import { Sizes } from '../../theme'

const defaultOptions = ['cols', 'flow', 'rows']
export const colsOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const flowOptions = ['row', 'col', 'dense', 'row-dense', 'col-dense']
export const rowsOptions = [0, 1, 2, 3, 4, 5, 6]

export interface GridParentProps {
    grid: boolean|Sizes<boolean>
    cols?: null|number|Sizes<number>
    flow?: null|string|Sizes<string>
    rows?: null|number|Sizes<number>
}

export default function useGridParentProps (includeProps: Array<string> = defaultOptions) {
    return {
        ...(includeProps.includes('grid') ? {
            grid: {
                type: Boolean,
                default: false,
            },
        } : {}),
        ...(includeProps.includes('cols') ? {
            cols: {
                type: [Number, Object as () => Sizes<number>],
                default: null,
            },
        } : {}),
        ...(includeProps.includes('flow') ? {
            flow: {
                type: String,
                default: null,
                validator: (v: string) => flowOptions.includes(v),
            },
        } : {}),
        ...(includeProps.includes('rows') ? {
            rows: {
                type: Number,
                default: null,
                validator: (v: number) => rowsOptions.includes(v),
            },
        } : {}),
    }
}

export function gridParentArgs (props: GridParentProps, includeProps: Array<string> = defaultOptions) {
    return {
        ...(includeProps.includes('grid') ? {
            grid: props.grid,
        } : {}),
        ...(includeProps.includes('cols') ? {
            cols: props.cols,
        } : {}),
        ...(includeProps.includes('flow') ? {
            flow: props.flow,
        } : {}),
        ...(includeProps.includes('rows') ? {
            rows: props.rows
        } : {}),
    }
}

export function gridParentArgTypes (props: GridParentProps, includeProps: Array<string> = defaultOptions) {
    return {
        ...(includeProps.includes('grid') ? {
            grid: {
                control: { type: 'boolean' },
                description: 'Whether this component is a grid element.',
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.grid
                    },
                    type: {
                        summary: 'boolean'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('cols') ? {
            cols: {
                control: 'select',
                description: 'How many columns the grid has.',
                options: colsOptions,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.cols
                    },
                    type: {
                        summary: 'number|Sizes'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('flow') ? {
            flow: {
                control: 'select',
                description: 'The flow of the grid.',
                options: flowOptions,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.flow
                    },
                    type: {
                        summary: 'string|Sizes'
                    },
                }
            },
        } : {}),
        ...(includeProps.includes('rows') ? {
            rows: {
                control: 'select',
                description: 'How many rows the grid has.',
                options: rowsOptions,
                table: {
                    category: 'props',
                    defaultValue: {
                        summary: props.rows
                    },
                    type: {
                        summary: 'number|Sizes'
                    },
                }
            }
        } : {}),
    }
}
