import { getCurrentInstance } from 'vue'
import { FlexParentProps } from '../../props/useFlexParentProps'
import useGetValueForScreen from '../../useGetValueForScreen'

export default function useApplyFlexParent (
    overrideFlex: FlexParentProps['flex'] = null,
    overrideFlexDirection: FlexParentProps['flexDirection'] = null,
    overrideFlexItems: FlexParentProps['flexItems'] = null,
    overrideFlexJustify: FlexParentProps['flexJustify'] = null,
    overrideFlexWrap: FlexParentProps['flexWrap'] = null
): string {
    const ctx = getCurrentInstance()
    const flexProp: FlexParentProps['flex'] = overrideFlex === null
        ? ((ctx?.props.flex as FlexParentProps['flex']) ?? null)
        : overrideFlex
    const flexDirectionProp: FlexParentProps['flexDirection'] = overrideFlexDirection === null
        ? ((ctx?.props.flexDirection as FlexParentProps['flexDirection']) ?? null)
        : overrideFlexDirection
    const flexItemsProp: FlexParentProps['flexItems'] = overrideFlexItems === null
        ? ((ctx?.props.flexItems as FlexParentProps['flexItems']) ?? null)
        : overrideFlexItems
    const flexJustifyProp: FlexParentProps['flexJustify'] = overrideFlexJustify === null
        ? ((ctx?.props.flexJustify as FlexParentProps['flexJustify']) ?? null)
        : overrideFlexJustify
    const flexWrapProp: FlexParentProps['flexWrap'] = overrideFlexWrap === null
        ? ((ctx?.props.flexWrap as FlexParentProps['flexWrap']) ?? null)
        : overrideFlexWrap

    const output: Array<string> = []

    if(flexProp !== null) {
        const flex: boolean = typeof flexProp === 'boolean' ? flexProp : useGetValueForScreen<boolean>(flexProp)
        if(flex === true) {
            output.push('flex')

            if(flexDirectionProp !== null) {
                const flexDirection: string = typeof flexDirectionProp === 'string' ? flexDirectionProp : useGetValueForScreen<string>(flexDirectionProp)
                switch(flexDirection) {
                    case 'row': { output.push('flex-row'); break }
                    case 'col': { output.push('flex-col'); break }
                    case 'row-reverse': { output.push('flex-row-reverse'); break }
                    case 'col-reverse': { output.push('flex-col-reverse'); break }
                }
            }

            if(flexItemsProp !== null) {
                const flexItems: string = typeof flexItemsProp === 'string' ? flexItemsProp : useGetValueForScreen<string>(flexItemsProp)
                switch(flexItems) {
                    case 'start': { output.push('items-start'); break }
                    case 'center': { output.push('items-center'); break }
                    case 'end': { output.push('items-end'); break }
                    case 'baseline': { output.push('items-baseline'); break }
                    case 'stretch': { output.push('items-stretch'); break }
                }
            }

            if(flexJustifyProp !== null) {
                const flexJustify: string = typeof flexJustifyProp === 'string' ? flexJustifyProp : useGetValueForScreen<string>(flexJustifyProp)
                switch(flexJustify) {
                    case 'start': { output.push('justify-start'); break }
                    case 'center': { output.push('justify-center'); break }
                    case 'end': { output.push('justify-end'); break }
                    case 'between': { output.push('justify-between'); break }
                    case 'around': { output.push('justify-around'); break }
                    case 'evenly': { output.push('justify-evenly'); break }
                }
            }

            if(flexWrapProp !== null) {
                const flexWrap: string = typeof flexWrapProp === 'string' ? flexWrapProp : useGetValueForScreen<string>(flexWrapProp)
                switch(flexWrap) {
                    case 'wrap': { output.push('flex-wrap'); break }
                    case 'wrap-reverse': { output.push('flex-wrap-reverse'); break }
                    case 'nowrap': { output.push('flex-nowrap'); break }
                }
            }
        }
    }

    return output.join(' ')
}
