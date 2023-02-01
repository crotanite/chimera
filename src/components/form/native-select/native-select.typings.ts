import { formGlobalInputProps, FormGlobalItemProps } from '../form.typings'
import useLabelProps, { LabelProps } from '../../../composables/props/useLabelProps'

export interface FormNativeSelectProps extends
    FormGlobalItemProps<null|string>
{
    withoutHeight?: boolean
}

export interface FormNativeSelectWithLabelProps extends
    FormNativeSelectProps,
    LabelProps
{}

export const formNativeSelectProps = {
    ...formGlobalInputProps<null|string>(null),

    ...{
        withoutHeight: {
            type: Boolean,
            default: false,
        }
    }
}

export const formNativeSelectWithLabelProps = {
    ...formNativeSelectProps,
    ...useLabelProps({ description: null, label: null }),
}

export default formNativeSelectProps
