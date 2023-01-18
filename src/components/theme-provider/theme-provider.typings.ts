import { ChimeraTheme, Theme } from '../../theme'

export interface ThemeProps {
    theme: Theme
}

export const themeProps = {
    theme: {
        type: Object as () => Theme,
        default: () => ChimeraTheme
    },
}

export default themeProps

export const themeProviderArgTypes = {
    theme: {
        control: { type: 'object' },
        defaultValue: {
            summary: 'BaseTheme'
        },
        description: 'A `Theme` object that can be used to customise the stylings of chimera components.',
        table: {
            category: 'props',
            type: {
                summary: 'Theme'
            }
        }
    },

}
