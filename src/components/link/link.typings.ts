import useColorProps, { ColorProps } from '../../composables/props/useColorProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useContentProps, { ContentProps } from '../../composables/props/useContentProps'

export interface LinkProps extends
    ColorProps,
    ComponentProps,
    ContentProps
{}

export const linkProps = {
    ...useColorProps(),
    ...useComponentProps(),
    ...useContentProps(),
}

export default linkProps
