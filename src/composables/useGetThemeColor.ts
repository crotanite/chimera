import useGetThemeProperty from './useGetThemeProperty'

export default function useGetThemeColor(color: string) {
    const colors = useGetThemeProperty('colors')
    const systemFallback = useGetThemeProperty('systemFallback')
    const primaryFallback = useGetThemeProperty('primaryFallback')
    const [fullColor, opacity] = color.split('/')
    const [group, level] = fullColor.split('.')

    let output = ''

    if(level === '0') {
        output = colors.white as string
    } else if(level === '1000') {
        output = colors.black as string
    } else {
        if(colors.hasOwnProperty(group)) {
            if(colors[group].hasOwnProperty(level)) {
                output = colors[group][level] as string
            } else {
                output = colors[group] as string
            }
        } else {
            if (group === 'system') {
                output = colors[systemFallback][level]
            }

            if (group === 'primary') {
                output = colors[primaryFallback][level]
            }
        }
    }

    return hexToRgb(output, opacity ?? '100')
}

const hexToRgb = (hex: string, opacity: string = '100'): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${Number(opacity) / 100})` : ''
}
