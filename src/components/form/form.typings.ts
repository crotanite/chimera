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

export interface FormProps extends
    BorderProps,
    ComponentProps,
    HeightProps,
    PaddingProps,
    RoundedProps,
    SpacingProps
{}

export interface FormGlobalInputProps<T> extends
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
        ...{
            placeholder: {
                type: String,
                default: null
            }
        }
    }
}

export default formProps
