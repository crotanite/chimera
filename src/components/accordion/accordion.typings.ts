import { ComputedRef, Ref } from 'vue'
import useGetThemeProperty from '../../composables/useGetThemeProperty'
import useColorProps, { ColorProps } from '../../composables/props/useColorProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useContentProps, { ContentProps } from '../../composables/props/useContentProps'
import useDisabledProps, { DisabledProps } from '../../composables/props/useDisabledProps'
import useIconProps, { IconProps } from '../../composables/props/useIconProps'
import useModelValueProps, { ModelValueProps } from '../../composables/props/useModelValueProps'
import useMultipleProps, { MultipleProps } from '../../composables/props/useMultipleProps'
import usePaddingProps, { PaddingProps } from '../../composables/props/usePaddingProps'
import useRoundedProps, { RoundedProps } from '../../composables/props/useRoundedProps'
import useSpacingProps, { SpacingProps } from '../../composables/props/useSpacingProps'
import useUnstyledProps, { UnstyledProps } from '../../composables/props/useUnstyledProps'
import useValueProps, { ValueProps } from '../../composables/props/useValueProps'

export interface AccordionProps extends
    ColorProps,
    ComponentProps,
    IconProps,
    ModelValueProps<null|string|Array<string>>,
    MultipleProps,
    PaddingProps,
    RoundedProps,
    SpacingProps,
    UnstyledProps
{}

export const accordionPropsOptions = {
    color: ['color', 'variant'],
    spacing: ['spacingY'],
}

export const accordionProps = {
    ...useColorProps(accordionPropsOptions.color),
    ...useComponentProps(),
    ...useIconProps(),
    ...useModelValueProps(),
    ...useMultipleProps(),
    ...usePaddingProps(),
    ...useRoundedProps(),
    ...useSpacingProps(accordionPropsOptions.spacing),
    ...useUnstyledProps(),
}

export interface InjectedAccordion extends AccordionProps {
    openItems: Ref<null|string|Array<string>>
    toggle: Function
}

export interface AccordionItemProps extends
    ComponentProps,
    DisabledProps,
    ValueProps
{
    customControl: boolean
}

export const itemProps = {
    ...useColorProps(),
    ...useComponentProps(),
    ...useDisabledProps(),
    ...useIconProps(),
    ...usePaddingProps(),
    ...useRoundedProps(),
    ...useUnstyledProps(),
    ...useValueProps(),
    ...{
        customControl: {
            type: Boolean,
            default: false,
        }
    }
}

export interface InjectedAccordionItem extends
    DisabledProps,
    ValueProps
{
    customControl: boolean
    isOpen: ComputedRef<boolean>
    getItemPropState: Function
    toggle: Function
}

export interface AccordionTitleProps extends
    ColorProps,
    ComponentProps,
    ContentProps
{}

export const titleProps = {
    ...useColorProps(),
    ...useComponentProps(),
    ...useContentProps(),
}

export interface AccordionPanelProps extends
    ColorProps,
    ComponentProps
{}

export const panelProps = {
    ...useColorProps(),
    ...useComponentProps(),
}

export const injectAccordionName = 'accordion'
export const injectAccordionItemName = 'accordion-item'

export default accordionProps

// import { ComputedRef, Ref } from 'vue'
//
//
// import useSpacingProps, { SpacingProps } from '../../composables/components/props/useSpacingProps'
// import useValueProps, { ValueProps } from '../../composables/components/props/useValueProps'

// export interface AccordionInjectedProps extends AccordionProps {
//     openItems: Ref<null|string|Array<string>>
//     toggle: Function
// }

// export interface ItemInjectedProps {
//     customControl: boolean
//     disabled: boolean
//     getPropState: Function
//     isOpen: ComputedRef<boolean>
//     toggle: Function
//     value: string
// }

// export const accordionProps = {
//
//     ...{
//         customControl: {
//             type: Boolean,
//             default: false
//         },

//         multiple: {
//             type: Boolean,
//             default: false,
//         }
//     }
// }

// export const itemProps = {
//     ...useColorProps(),
//     ...useComponentProps({ component: 'div' }),
//     ...useDisabledProps({ disabled: false }),
//     ...useIconProps({ icon: null, iconSide: null }, false),
//     ...usePaddingProps({ p: null, px: null, py: null }),
//     ...useRoundedProps({ rounded: null }),
//     ...useValueProps(),
//     ...useUnstyledProps({ unstyled: false }),
// }

// export const titleProps = {
//     ...useColorProps(),
//     ...useContentProps({ content: null }),
// }

// export const panelProps = {
//     ...useColorProps(),
// }

// export const accordionInjectKey = 'accordion'
// export const itemInjectKey = 'accordion-item'

// export default accordionProps

// // import { Ref } from 'vue'
// // import useComponentProps, { ComponentProps } from '../../composables/components/props/useComponentProps'
// // import useHasBorderProps, { HasBorderProps } from '../../composables/components/props/useHasBorderProps'
// // import useModelValueProps, { ModelValueProps } from '../../composables/components/props/useModelValueProps'
// //
// //

// // export interface AccordionProps extends ComponentProps, HasBorderProps, PaddingProps, RoundedProps {
// //     chevronSide?: null|'left'|'right'
// //     unstyled?: boolean
// // }

// // export const accordionProps = {
// //     ...useComponentProps({ component: 'div' }),
// //     ...useHasBorderProps({ hasBorder: 1 }),
// // }

// // export interface ContainerProps extends AccordionProps, SpacingProps {
// //     multiple: boolean
// // }

// // export const containerProps = {
// //     ...accordionProps(),
// //     ...useModelValueProps({ modelValue: null } as ModelValueProps<null|string|Array<string>>),
// //     ...{
// //         multiple: {
// //             type: Boolean,
// //             default: false
// //         },
// //     }
// // }

// // export interface InjectedProps extends ContainerProps {
// //     openItems: Ref<null|string|Array<string>>,
// //     toggle: Function
// // }

// // export const containerArgTypes = {
// //     chevronSide: (defaultValue = containerProps.chevronSide.default) => {
// //         return {
// //             control: { type: 'select' },
// //             description: 'Whether multiple accordions can be opened at once.',
// //             options: [null, 'left', 'right'],
// //             table: {
// //                 category: 'props',
// //                 defaultValue: {
// //                     summary: String(defaultValue)
// //                 },
// //                 type: {
// //                     summary: 'string'
// //                 },
// //             }
// //         }
// //     },
// //     multiple: (defaultValue = containerProps.multiple.default) => {
// //         return {
// //             control: { type: 'boolean' },
// //             description: 'Whether multiple accordions can be opened at once.',
// //             table: {
// //                 category: 'props',
// //                 defaultValue: {
// //                     summary: String(defaultValue)
// //                 },
// //                 type: {
// //                     summary: 'boolean'
// //                 },
// //             }
// //         }
// //     },
// //     unstyled: (defaultValue = containerProps.unstyled.default) => {
// //         return {
// //             control: { type: 'boolean' },
// //             description: 'Whether multiple accordions can be opened at once.',
// //             table: {
// //                 category: 'props',
// //                 defaultValue: {
// //                     summary: String(defaultValue)
// //                 },
// //                 type: {
// //                     summary: 'boolean'
// //                 },
// //             }
// //         }
// //     },
// // }

// // export default containerProps
