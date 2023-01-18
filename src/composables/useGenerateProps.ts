import useGetThemeProperty from './useGetThemeProperty'

export default function useGenerateProps(setProps: object, primaryComponentName: string, ...componentNames: Array<string>): object {
    const componentProps = useGetThemeProperty(`ui.${primaryComponentName}`)
    componentNames.forEach((name: string) => {
        Object.entries(useGetThemeProperty(`ui.${name}`)).forEach((item) => {
            const [key, value] = item
            componentProps[key] = value
        })
    })

    const output = {}

    Object.entries(setProps).forEach((prop) => {
        const [name, val] = prop
        if(typeof val === 'undefined' && componentProps.hasOwnProperty(name)) {
            output[name] = componentProps[name]
        } else {
            output[name] = val
        }
    })

    return output
}
