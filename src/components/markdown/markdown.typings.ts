import useContentProps, { ContentProps } from '../../composables/props/useContentProps'

export interface MarkdownProps extends
    ContentProps
{}

export const markdownProps = {
    ...useContentProps({ content: null }),
}

export default markdownProps
