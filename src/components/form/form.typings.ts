import { computed, ComputedRef } from 'vue'
import useBorderProps, { BorderProps } from '../../composables/props/useBorderProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useDisabledProps, { DisabledProps } from '../../composables/props/useDisabledProps'
import useErrorProps, { ErrorProps } from '../../composables/props/useErrorProps'
import useHeightProps, { HeightProps } from '../../composables/props/useHeightProps'
import useModelValueProps, { ModelValueProps } from '../../composables/props/useModelValueProps'
import usePaddingProps, { PaddingProps } from '../../composables/props/usePaddingProps'
import useRoundedProps, { RoundedProps } from '../../composables/props/useRoundedProps'
import useSpacingProps, { SpacingProps } from '../../composables/props/useSpacingProps'
import useApplyBorder from '../../composables/methods/styles/useApplyBorder'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyDisabled from '../../composables/methods/styles/useApplyDisabled'
import useApplyHeight from '../../composables/methods/styles/useApplyHeight'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'

export interface FormProps extends
    BorderProps,
    ComponentProps,
    HeightProps,
    PaddingProps,
    RoundedProps,
    SpacingProps
{}

export interface FormGlobalItemProps<T> extends
    DisabledProps,
    ErrorProps,
    ModelValueProps<T>
{
    name?: string
    placeholder?: null|string
}

export interface FormInject {
    classes: Function
    styles: Function
}

export const formPropsOptions = {
    spacing: ['spacingY']
}

export const formProps = {
    ...useBorderProps(),
    ...useComponentProps(),
    ...useHeightProps(),
    ...usePaddingProps(),
    ...useRoundedProps(),
    ...useSpacingProps(formPropsOptions.spacing),
}

export function formGlobalItemProps<T> (modelValueDefault: T = null) {
    return {
        ...useDisabledProps(),
        ...useErrorProps(),
        ...useModelValueProps<T>({ modelValue: modelValueDefault }),

        ...{
            name: {
                type: String,
                required: true
            }
        }
    }
}

export function formGlobalInputProps<T> (modelValueDefault: T = null) {
    return {
        ...formGlobalItemProps<T>(modelValueDefault),
        ...useBorderProps(),
        ...useComponentProps(),
        ...useHeightProps(),
        ...usePaddingProps(),
        ...useRoundedProps(),
        ...{
            placeholder: {
                type: String,
                default: null
            }
        }
    }
}

export const inputClasses = () => {
    return [
        'overflow-hidden text-sm',
    ]
}

export const inputStyles = (props: object, hasError: null|boolean = null, withHeight: boolean = true, disabled: boolean = false) => {
    return computed(() => {
        return {
            ...useApplyColor(null, {
                system: {
                    default: {
                        filled: {
                            lightBorderColor: 200,
                            darkBorderColor: 700
                        }
                    }
                }
            }, 'system', 'filled', null, hasError !== null && hasError ? 'red' : null),
            ...useApplyBorder(props.border),
            ...useApplyDisabled(disabled),
            ...(withHeight && useApplyHeight(props.height)),
            ...useApplyPadding(props.p, props.px, props.py),
            ...useApplyRounded(props.rounded),
        }
    })
}

export default formProps
