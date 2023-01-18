import useGetThemeProperty from './useGetThemeProperty'

export default function useGetThemeColors(): Array<string> {
    const colors = useGetThemeProperty('colors')

    return ['primary', 'system']
        .concat(Object.keys(colors))
}
