import useLabelProps, { LabelProps } from '../../../composables/props/useLabelProps'

export interface FormLabelProps extends
    LabelProps
{}

export const formLabelProps = {
    ...useLabelProps({ description: null, label: null }),
}

export default formLabelProps
