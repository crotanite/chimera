import { formGlobalInputProps, FormGlobalInputProps } from '../form.typings'
import useLabelProps, { LabelProps } from '../../../composables/props/useLabelProps'

export interface FormInputProps extends
    FormGlobalInputProps<null|string>
{
    type?: string
}

export interface FormInputWithLabelProps extends
    FormInputProps,
    LabelProps
{}

export const formInputProps = {
    ...formGlobalInputProps<null|string>(null),

    ...{
        type: {
            type: String,
            default: 'text'
        }
    }
}

export const formInputWithLabelProps = {
    ...formInputProps,
    ...useLabelProps({ description: null, label: null }),
}

export default formInputProps
