import { Sizes } from '../../theme'

export const options: Array<null|number|string> = [null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export interface GridChildProps {
    end?: null|number|Sizes<number>
    span?: null|number|string|Sizes<number|string>
    start?: null|number|Sizes<number>
}

export default function useGridChildProps () {
    return {
        end: {
            type: [Number, Object as () => Sizes<number>],
            default: null,
            validator: (v: null|number|object) => typeof v === 'number' ? options.includes(v) : true,
        },
        span: {
            type: [Number, String, Object as () => Sizes<number>],
            default: null,
            validator: (v: null|number|string|object) => typeof v === 'number' || typeof v === 'string' ? options.concat(['full']).includes(v) : true,
        },
        start: {
            type: [Number, Object as () => Sizes<number>],
            default: null,
            validator: (v: null|number|object) => typeof v === 'number' ? options.includes(v) : true,
        },
    }
}

export function gridChildArgs (props: GridChildProps) {
    return {
        end: props.end,
        span: props.span,
        start: props.start
    }
}

export function gridChildArgTypes (props: GridChildProps) {
    return {
        end: {
            control: { type: 'select' },
            description: 'The "end" position of the column in a `ChiGrid` component.',
            options: options,
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.end)
                },
                type: {
                    summary: 'number|Sizes'
                },
            }
        },
        span: {
            control: { type: 'select' },
            description: 'The number of columns this component should span in a `ChiGrid` component.',
            options: options.concat('full'),
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.span)
                },
                type: {
                    summary: 'number|string|Sizes'
                },
            }
        },
        start: {
            control: { type: 'select' },
            description: 'The "start" position of the column in a `ChiGrid` component.',
            options: options,
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.start)
                },
                type: {
                    summary: 'number|Sizes'
                },
            }
        }
    }
}
