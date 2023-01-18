import useContentProps, { ContentProps } from '../../../composables/props/useContentProps'

export interface FormErrorProps extends
    ContentProps
{}

export const formErrorProps = {
    ...useContentProps({ content: null }),
}

export default formErrorProps
