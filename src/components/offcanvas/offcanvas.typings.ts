import { extendedSizes, Sizes } from '../../theme'
import useColorProps, { ColorProps } from '../../composables/props/useColorProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import usePaddingProps, { PaddingProps } from '../../composables/props/usePaddingProps'
import useWidthProps, { WidthProps } from '../../composables/props/useWidthProps'

export interface OffcanvasProps {}

export interface OffcanvasDrawerProps extends
    ColorProps,
    ComponentProps,
    PaddingProps,
    WidthProps
{
    breakpoints: Array<keyof Sizes<string>>
    forceHide?: boolean
    side: 'left'|'right'
}

export interface OffcanvasContentProps extends
    PaddingProps
{}

export interface Drawers {
    left: boolean
    right: boolean
}

export const offcanvasProps = {}

export const offcanvasContentProps = {
    ...usePaddingProps(),
}

export const offcanvasDrawerProps = {
    ...useColorProps(['color', 'variant']),
    ...useComponentProps(),
    ...usePaddingProps(),
    ...useWidthProps({ width: null }, false),

    forceHide: {
        type: Boolean,
        default: false
    },

    breakpoints: {
        type: Array,
        default: undefined,
        validator: (v: Array<string>) => v.every((i: keyof Sizes<string>) => extendedSizes.includes(i))
    },

    side: {
        type: String,
        default: undefined,
        validator: (v: string) => ['left', 'right'].includes(v)
    }
}

export function offcanvasDrawerArgs (props: OffcanvasDrawerProps) {
    return {
        forceHide: props.forceHide,
        breakpoints: props.breakpoints,
        side: props.side
    }
}

export function offcanvasDrawerArgTypes (props: OffcanvasDrawerProps) {
    return {
        forceHide: {
            control: { type: 'boolean' },
            description: '',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.forceHide)
                },
                type: {
                    summary: 'boolean'
                },
            }
        },
        breakpoints: {
            control: 'multi-select',
            description: '',
            options: extendedSizes,
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.breakpoints
                },
                type: {
                    summary: 'array'
                },
            }
        },
        side: {
            control: 'select',
            description: '',
            options: ['left', 'right'],
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.side)
                },
                type: {
                    summary: 'string'
                },
            }
        },
    }
}
