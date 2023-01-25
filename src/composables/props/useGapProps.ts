import { extendedSizes, Sizes } from '../../theme'

export interface GapProps {
    gap: null|string
    gapX?: null|string
    gapY?: null|string
}

export default function useGapProps () {
    return {
        gap: {
            type: String,
            default: undefined,
            validator: (v: keyof Sizes<string>) => extendedSizes.includes(v),
        },
        gapX: {
            type: String,
            default: undefined,
            validator: (v: keyof Sizes<string>) => extendedSizes.includes(v),
        },
        gapY: {
            type: String,
            default: undefined,
            validator: (v: keyof Sizes<string>) => extendedSizes.includes(v),
        }
    }
}

export function gapArgs (props: GapProps) {
    return {
        gap: props.gap,
        gapX: props.gapX,
        gapY: props.gapY
    }
}

export function gapArgTypes (props: GapProps) {
    return {
        gap: {
            control: 'select',
            description: 'Set the gap for the component.',
            options: extendedSizes.concat(null),
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.gap
                },
                type: {
                    summary: 'string'
                },
            }
        },
        gapX: {
            control: 'select',
            description: 'Set the horizontal gap for the component. Overrides `gap`.',
            options: extendedSizes.concat(null),
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.gapX
                },
                type: {
                    summary: 'string'
                },
            }
        },
        gapY: {
            control: 'select',
            description: 'Set the vertical gap for the component. Overrides `gap`.',
            options: extendedSizes.concat(null),
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.gapY
                },
                type: {
                    summary: 'string'
                },
            }
        }
    }
}
