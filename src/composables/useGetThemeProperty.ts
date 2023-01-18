import useTheme from './useTheme'

export default function useGetThemeProperty(property: string, fallback: string|null = null, trim: string|null = null) {
    let output = useTheme().value as any

    const propertyParts = property.split('.')

    for (let i = 0; i < propertyParts.length; i++) {
        if(output.hasOwnProperty(propertyParts[i])) {
            output = output[propertyParts[i]]
        } else {
            output = null
            break
        }
    }

    if(output === null && fallback !== null) {
        const fallbackParts = fallback.split('.')
        for (let i = 0; i < fallbackParts.length; i++) {
            if(output.hasOwnProperty(fallbackParts[i])) {
                output = output[fallbackParts[i]]
            } else {
                output = null
                break
            }
        }
    }

    if(trim !== null) {
        output = output.replace(trim, '')
    }

    return output
}
