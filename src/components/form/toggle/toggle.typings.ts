import { formGlobalItemProps, FormGlobalInputProps } from '../form.typings'
import useColorProps, { ColorProps } from '../../../composables/props/useColorProps'
import useContentProps, { ContentProps } from '../../../composables/props/useContentProps'
import useLabelProps, { LabelProps } from '../../../composables/props/useLabelProps'

export interface FormToggleProps extends
    FormGlobalInputProps<boolean>,
    ColorProps,
    ContentProps
{}

export interface FormToggleWithLabelProps extends
    FormToggleProps,
    LabelProps
{}

export const formTogglePropsOptions = {
    color: ['color']
}

export const formToggleProps = {
    ...formGlobalItemProps<boolean>(false),
    ...useColorProps(formTogglePropsOptions.color),
    ...useContentProps(),
}

export const formToggleWithLabelProps = {
    ...formToggleProps,
    ...useLabelProps(),
}

export default formToggleProps
