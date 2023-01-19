import { getCurrentInstance, Ref } from 'vue'
import { ColorProps } from '../../props/useColorProps'
import useMergeDeep from '../../useMergeDeep'
import useGetThemeColor from '../../useGetThemeColor'
import useGetThemeProperty from '../../useGetThemeProperty'
import useDark from '../../useDark'

export interface Levels<T = null|string|number> {
    lightBackgroundColor?: T
    lightBorderColor?: T
    lightTextColor?: T
    lightShadowColor?: T
    darkBackgroundColor?: T
    darkBorderColor?: T
    darkTextColor?: T
    darkShadowColor?: T
}

export interface Variants {
    filled?: Levels
    pale?: Levels
    transparent?: Levels
}

export interface States {
    default?: Variants
    hover?: Variants
}

export interface DefaultLevels {
    system?: States
    color?: States
}

export const system: States = {
    default: {
        filled: {
            lightBackgroundColor: 0,
            lightBorderColor: 200,
            lightTextColor: 900,
            lightShadowColor: 200,
            darkBackgroundColor: 900,
            darkBorderColor: 1000,
            darkTextColor: 0,
            darkShadowColor: 1000
        },
        pale: {
            lightBackgroundColor: '50/50',
            lightBorderColor: '50/50',
            lightTextColor: 900,
            lightShadowColor: '200/50',
            darkBackgroundColor: '900/30',
            darkBorderColor: '900/30',
            darkTextColor: 0,
            darkShadowColor: '1000/30'
        },
        transparent: {
            lightBackgroundColor: null,
            lightBorderColor: 0,
            lightTextColor: 900,
            lightShadowColor: 200,
            darkBackgroundColor: null,
            darkBorderColor: 900,
            darkTextColor: 0,
            darkShadowColor: 900
        }
    },
    hover: {
        filled: {
            lightBackgroundColor: '0/50',
            lightBorderColor: '0/50',
            lightTextColor: 900,
            darkBackgroundColor: '900/50',
            darkBorderColor: '900/50',
            darkTextColor: 0
        },
        pale: {
            lightBackgroundColor: 0,
            lightBorderColor: 0,
            lightTextColor: 900,
            darkBackgroundColor: 900,
            darkBorderColor: 900,
            darkTextColor: 0
        },
        transparent: {
            lightBackgroundColor: '0/75',
            lightBorderColor: '0/75',
            lightTextColor: 700,
            darkBackgroundColor: '900/75',
            darkBorderColor: '900/75',
            darkTextColor: 200
        }
    }
}

export const color: States = {
    default: {
        filled: {
            lightBackgroundColor: 500,
            lightBorderColor: 600,
            lightTextColor: 0,
            lightShadowColor: 600,
            darkBackgroundColor: 600,
            darkBorderColor: 700,
            darkTextColor: 0,
            darkShadowColor: 700
        },
        pale: {
            lightBackgroundColor: '300/70',
            lightBorderColor: '300/70',
            lightTextColor: 900,
            lightShadowColor: '400/70',
            darkBackgroundColor: '500/30',
            darkBorderColor: '500/30',
            darkTextColor: 0,
            darkShadowColor: '600/30'
        },
        transparent: {
            lightBackgroundColor: null,
            lightBorderColor: 500,
            lightTextColor: 500,
            lightShadowColor: 600,
            darkBackgroundColor: null,
            darkBorderColor: 500,
            darkTextColor: 500,
            darkShadowColor: 600
        }
    },
    hover: {
        filled: {
            lightBackgroundColor: 600,
            lightBorderColor: 600,
            lightTextColor: 0,
            lightShadowColor: 700,
            darkBackgroundColor: 700,
            darkBorderColor: 700,
            darkTextColor: 0,
            darkShadowColor: 800
        },
        pale: {
            lightBackgroundColor: '400/70',
            lightBorderColor: '400/70',
            lightTextColor: 900,
            lightShadowColor: '500/70',
            darkBackgroundColor: '600/30',
            darkBorderColor: '600/30',
            darkTextColor: 0,
            darkShadowColor: '700/30'
        },
        transparent: {
            lightBackgroundColor: '100/50',
            lightBorderColor: 600,
            lightTextColor: 600,
            lightShadowColor: 700,
            darkBackgroundColor: '900/50',
            darkBorderColor: 400,
            darkTextColor: 400,
            darkShadowColor: 600
        }
    }
}

export const defaultLevels: DefaultLevels = { system, color }
export type useApplyColorOutput = { backgroundColor?: string, borderColor?: string, color?: string, '--tw-shadow-color'?: string }

export default function useApplyColor (
    hover: null|Ref = null,
    overrideDefaultLevels: null|DefaultLevels = null,
    overrideColor: ColorProps['color'] = null,
    overrideVariant: ColorProps['variant'] = null,
    overrideBackgroundColor: ColorProps['color'] = null,
    overrideBorderColor: ColorProps['color'] = null,
    overrideTextColor: ColorProps['color'] = null,
    overrideShadowColor: ColorProps['color'] = null,
): null|useApplyColorOutput {
    const ctx = getCurrentInstance()

    const color: ColorProps['color'] = overrideColor === null ? ((ctx?.props.color as ColorProps['color']) ?? null) : overrideColor
    const variant: ColorProps['variant'] = overrideVariant === null ? ((ctx?.props.variant as ColorProps['variant']) ?? null) : overrideVariant
    const backgroundColor: ColorProps['backgroundColor'] = overrideBackgroundColor === null ? ((ctx?.props.backgroundColor as ColorProps['backgroundColor']) ?? color) : overrideBackgroundColor
    const borderColor: ColorProps['borderColor'] = overrideBorderColor === null ? ((ctx?.props.borderColor as ColorProps['borderColor']) ?? color) : overrideBorderColor
    const textColor: ColorProps['textColor'] = overrideTextColor === null ? ((ctx?.props.textColor as ColorProps['textColor']) ?? color) : overrideTextColor
    const shadowColor: ColorProps['shadowColor'] = overrideShadowColor === null ? ((ctx?.props.shadowColor as ColorProps['shadowColor']) ?? color) : overrideShadowColor

    let output: useApplyColorOutput = {}

    if(variant === null || (backgroundColor === null && borderColor === null && textColor === null && shadowColor === null)) {
        return null
    }

    const nonLevelledColors = useGetThemeProperty('nonLevelledColors') as Array<string>
    const copyDefaultLevels = JSON.parse(JSON.stringify(defaultLevels))
    let levels = copyDefaultLevels as DefaultLevels
    if(overrideDefaultLevels !== null) {
        levels = useMergeDeep(copyDefaultLevels, overrideDefaultLevels)
    }

    if(backgroundColor !== null) {
        output.backgroundColor = hover === null || hover.value === false
            ? (backgroundColor.includes('.') || nonLevelledColors.includes(backgroundColor)
                ? useGetThemeColor(backgroundColor)
                : (useDark().value
                    ? (backgroundColor === 'system'
                        ? useGetThemeColor(`${backgroundColor}.${levels.system.default[variant].darkBackgroundColor}`)
                        : useGetThemeColor(`${backgroundColor}.${levels.color.default[variant].darkBackgroundColor}`)
                    )
                    : (backgroundColor === 'system'
                        ? useGetThemeColor(`${backgroundColor}.${levels.system.default[variant].lightBackgroundColor}`)
                        : useGetThemeColor(`${backgroundColor}.${levels.color.default[variant].lightBackgroundColor}`)
                    )
                ))
            : (backgroundColor.includes('.') || nonLevelledColors.includes(backgroundColor)
                ? useGetThemeColor(backgroundColor)
                : (useDark().value
                    ? (backgroundColor === 'system'
                        ? useGetThemeColor(`${backgroundColor}.${levels.system.hover[variant].darkBackgroundColor}`)
                        : useGetThemeColor(`${backgroundColor}.${levels.color.hover[variant].darkBackgroundColor}`)
                    )
                    : (backgroundColor === 'system'
                        ? useGetThemeColor(`${backgroundColor}.${levels.system.hover[variant].lightBackgroundColor}`)
                        : useGetThemeColor(`${backgroundColor}.${levels.color.hover[variant].lightBackgroundColor}`)
                    )
                ))
    }

    if(borderColor !== null) {
        output.borderColor = hover === null || hover.value === false
            ? (borderColor.includes('.') || nonLevelledColors.includes(borderColor)
                ? useGetThemeColor(borderColor)
                : (useDark().value
                    ? (borderColor === 'system'
                        ? useGetThemeColor(`${borderColor}.${levels.system.default[variant].darkBorderColor}`)
                        : useGetThemeColor(`${borderColor}.${levels.color.default[variant].darkBorderColor}`)
                    )
                    : (borderColor === 'system'
                        ? useGetThemeColor(`${borderColor}.${levels.system.default[variant].lightBorderColor}`)
                        : useGetThemeColor(`${borderColor}.${levels.color.default[variant].lightBorderColor}`)
                    )
                ))
            : (borderColor.includes('.') || nonLevelledColors.includes(borderColor)
                ? useGetThemeColor(borderColor)
                : (useDark().value
                    ? (borderColor === 'system'
                        ? useGetThemeColor(`${borderColor}.${levels.system.hover[variant].darkBorderColor}`)
                        : useGetThemeColor(`${borderColor}.${levels.color.hover[variant].darkBorderColor}`)
                    )
                    : (borderColor === 'system'
                        ? useGetThemeColor(`${borderColor}.${levels.system.hover[variant].lightBorderColor}`)
                        : useGetThemeColor(`${borderColor}.${levels.color.hover[variant].lightBorderColor}`)
                    )
                ))
    }

    if(textColor !== null) {
        output.color = hover === null || hover.value === false
            ? (textColor.includes('.') || nonLevelledColors.includes(textColor)
                ? useGetThemeColor(textColor)
                : (useDark().value
                    ? (textColor === 'system'
                        ? useGetThemeColor(`${textColor}.${levels.system.default[variant].darkTextColor}`)
                        : useGetThemeColor(`${textColor}.${levels.color.default[variant].darkTextColor}`)
                    )
                    : (textColor === 'system'
                        ? useGetThemeColor(`${textColor}.${levels.system.default[variant].lightTextColor}`)
                        : useGetThemeColor(`${textColor}.${levels.color.default[variant].lightTextColor}`)
                    )
                ))
            : (textColor.includes('.') || nonLevelledColors.includes(textColor)
                ? useGetThemeColor(textColor)
                : (useDark().value
                    ? (textColor === 'system'
                        ? useGetThemeColor(`${textColor}.${levels.system.hover[variant].darkTextColor}`)
                        : useGetThemeColor(`${textColor}.${levels.color.hover[variant].darkTextColor}`)
                    )
                    : (textColor === 'system'
                        ? useGetThemeColor(`${textColor}.${levels.system.hover[variant].lightTextColor}`)
                        : useGetThemeColor(`${textColor}.${levels.color.hover[variant].lightTextColor}`)
                    )
                ))
    }

    if(shadowColor !== null) {
        output['--tw-shadow-color'] = hover === null || hover.value === false
            ? (shadowColor.includes('.') || nonLevelledColors.includes(shadowColor)
                ? useGetThemeColor(shadowColor)
                : (useDark().value
                    ? (shadowColor === 'system'
                        ? useGetThemeColor(`${shadowColor}.${levels.system.default[variant].darkShadowColor}`)
                        : useGetThemeColor(`${shadowColor}.${levels.color.default[variant].darkShadowColor}`)
                    )
                    : (shadowColor === 'system'
                        ? useGetThemeColor(`${shadowColor}.${levels.system.default[variant].lightShadowColor}`)
                        : useGetThemeColor(`${shadowColor}.${levels.color.default[variant].lightShadowColor}`)
                    )
                ))
            : (shadowColor.includes('.') || nonLevelledColors.includes(shadowColor)
                ? useGetThemeColor(shadowColor)
                : (useDark().value
                    ? (shadowColor === 'system'
                        ? useGetThemeColor(`${shadowColor}.${levels.system.hover[variant].darkShadowColor}`)
                        : useGetThemeColor(`${shadowColor}.${levels.color.hover[variant].darkShadowColor}`)
                    )
                    : (shadowColor === 'system'
                        ? useGetThemeColor(`${shadowColor}.${levels.system.hover[variant].lightShadowColor}`)
                        : useGetThemeColor(`${shadowColor}.${levels.color.hover[variant].lightShadowColor}`)
                    )
                ))
    }

    // if(hover === null || hover.value === false) {
    //     output = {

    //         borderColor: borderColor.includes('.') || nonLevelledColors.includes(borderColor)
    //             ? useGetThemeColor(borderColor)
    //             : (useDark().value
    //                 ? (borderColor === 'system'
    //                     ? useGetThemeColor(`${borderColor}.${levels.system.default[variant].darkBorderColor}`)
    //                     : useGetThemeColor(`${borderColor}.${levels.color.default[variant].darkBorderColor}`)
    //                 )
    //                 : (borderColor === 'system'
    //                     ? useGetThemeColor(`${borderColor}.${levels.system.default[variant].lightBorderColor}`)
    //                     : useGetThemeColor(`${borderColor}.${levels.color.default[variant].lightBorderColor}`)
    //                 )
    //             ),
    //         color: textColor.includes('.') || nonLevelledColors.includes(textColor)
    //             ? useGetThemeColor(textColor)
    //             : (useDark().value
    //                 ? (textColor === 'system'
    //                     ? useGetThemeColor(`${textColor}.${levels.system.default[variant].darkTextColor}`)
    //                     : useGetThemeColor(`${textColor}.${levels.color.default[variant].darkTextColor}`)
    //                 )
    //                 : (textColor === 'system'
    //                     ? useGetThemeColor(`${textColor}.${levels.system.default[variant].lightTextColor}`)
    //                     : useGetThemeColor(`${textColor}.${levels.color.default[variant].lightTextColor}`)
    //                 )
    //             ),
    //         '--tw-shadow-color': shadowColor.includes('.') || nonLevelledColors.includes(shadowColor)
    //             ? useGetThemeColor(shadowColor)
    //             : (useDark().value
    //                 ? (shadowColor === 'system'
    //                     ? useGetThemeColor(`${shadowColor}.${levels.system.default[variant].darkShadowColor}`)
    //                     : useGetThemeColor(`${shadowColor}.${levels.color.default[variant].darkShadowColor}`)
    //                 )
    //                 : (shadowColor === 'system'
    //                     ? useGetThemeColor(`${shadowColor}.${levels.system.default[variant].lightShadowColor}`)
    //                     : useGetThemeColor(`${shadowColor}.${levels.color.default[variant].lightShadowColor}`)
    //                 )
    //             )
    //     }
    // } else {
    //     output = {
    //         backgroundColor: backgroundColor.includes('.') || nonLevelledColors.includes(backgroundColor)
    //             ? useGetThemeColor(backgroundColor)
    //             : (useDark().value
    //                 ? (backgroundColor === 'system'
    //                     ? useGetThemeColor(`${backgroundColor}.${levels.system.hover[variant].darkBackgroundColor}`)
    //                     : useGetThemeColor(`${backgroundColor}.${levels.color.hover[variant].darkBackgroundColor}`)
    //                 )
    //                 : (backgroundColor === 'system'
    //                     ? useGetThemeColor(`${backgroundColor}.${levels.system.hover[variant].lightBackgroundColor}`)
    //                     : useGetThemeColor(`${backgroundColor}.${levels.color.hover[variant].lightBackgroundColor}`)
    //                 )
    //             ),
    //         borderColor: borderColor.includes('.') || nonLevelledColors.includes(borderColor)
    //             ? useGetThemeColor(borderColor)
    //             : (useDark().value
    //                 ? (borderColor === 'system'
    //                     ? useGetThemeColor(`${borderColor}.${levels.system.hover[variant].darkBorderColor}`)
    //                     : useGetThemeColor(`${borderColor}.${levels.color.hover[variant].darkBorderColor}`)
    //                 )
    //                 : (borderColor === 'system'
    //                     ? useGetThemeColor(`${borderColor}.${levels.system.hover[variant].lightBorderColor}`)
    //                     : useGetThemeColor(`${borderColor}.${levels.color.hover[variant].lightBorderColor}`)
    //                 )
    //             ),
    //         color: textColor.includes('.') || nonLevelledColors.includes(textColor)
    //             ? useGetThemeColor(textColor)
    //             : (useDark().value
    //                 ? (textColor === 'system'
    //                     ? useGetThemeColor(`${textColor}.${levels.system.hover[variant].darkTextColor}`)
    //                     : useGetThemeColor(`${textColor}.${levels.color.hover[variant].darkTextColor}`)
    //                 )
    //                 : (textColor === 'system'
    //                     ? useGetThemeColor(`${textColor}.${levels.system.hover[variant].lightTextColor}`)
    //                     : useGetThemeColor(`${textColor}.${levels.color.hover[variant].lightTextColor}`)
    //                 )
    //             ),
    //         '--tw-shadow-color': shadowColor.includes('.') || nonLevelledColors.includes(shadowColor)
    //             ? useGetThemeColor(shadowColor)
    //             : (useDark().value
    //                 ? (shadowColor === 'system'
    //                     ? useGetThemeColor(`${shadowColor}.${levels.system.hover[variant].darkShadowColor}`)
    //                     : useGetThemeColor(`${shadowColor}.${levels.color.hover[variant].darkShadowColor}`)
    //                 )
    //                 : (shadowColor === 'system'
    //                     ? useGetThemeColor(`${shadowColor}.${levels.system.hover[variant].lightShadowColor}`)
    //                     : useGetThemeColor(`${shadowColor}.${levels.color.hover[variant].lightShadowColor}`)
    //                 )
    //             )
    //     }
    // }

    return output
}
