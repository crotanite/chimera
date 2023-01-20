import { formGlobalInputProps, FormGlobalItemProps } from '../form.typings'
import useLabelProps, { LabelProps } from '../../../composables/props/useLabelProps'

export interface FormInputProps extends
    FormGlobalItemProps<null|string>
{
    type?: string
    withoutHeight?: boolean
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
        },

        withoutHeight: {
            type: Boolean,
            default: false,
        }
    }
}

export const formInputWithLabelProps = {
    ...formInputProps,
    ...useLabelProps({ description: null, label: null }),
}

export default formInputProps
