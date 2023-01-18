import useGetThemeProperty from '../useGetThemeProperty'
const themes = Object.keys(useGetThemeProperty('ui.alert.themes'))

export interface ThemeProps {
    theme: string
}

export interface SetThemes {
    themes: {
        [key: string]: string
    }
}

export default function useThemeProps (props: ThemeProps = null) {
    return {
        theme: {
            type: String,
            default: props === null || !props.hasOwnProperty('theme') ? null : props.theme,
            validator: (v: string) => themes.includes(v),
        }
    }
}

export function themeArgs (props: ThemeProps) {
    return {
        theme: props.theme
    }
}

export function themeArgTypes (props: ThemeProps) {
    return {
        theme: {
            control: 'select',
            description: 'The theme of the component.',
            options: themes,
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.theme)
                },
                type: {
                    summary: 'string'
                },
            }
        }
    }
}
