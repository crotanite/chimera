import useColorProps, { ColorProps } from '../../composables/props/useColorProps'

export interface ScreenProps extends
    ColorProps
{}

export const screenProps = {
    ...useColorProps(),
}

export default screenProps
