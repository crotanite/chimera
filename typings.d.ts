declare module "@lumite-studios/chimera" {
    export const ChiAccordion: any
    export const ChiAccordionItem: any
    export const ChiAccordionPanel: any
    export const ChiAccordionTitle: any
    export const ChiAlert: any
    export const ChiAvatar: any
    export const ChiAvatarGroup: any
    export const ChiButton: any
    export const ChiButtonGroup: any
    export const ChiColumn: any
    export const ChiDarkToggle: any
    export const ChiDiv: any
    export const ChiFlex: any
    export const ChiForm: any
    export const ChiError: any
    export const ChiInput: any
    export const ChiInputWithLabel: any
    export const ChiLabel: any
    export const ChiToggle: any
    export const ChiToggleWithLabel: any
    export const ChiGrid: any
    export const ChiHeading: any
    export const ChiLink: any
    export const ChiList: any
    export const ChiListItem: any
    export const ChiMarkdown: any
    export const ChiOffcanvas: any
    export const ChiOffcanvasContent: any
    export const ChiOffcanvasDrawer: any
    export const ChiScreen: any
    export const ChiTabs: any
    export const ChiTab: any
    export const ChiPanel: any
    export const ChiThemeProvider: any

    const ColorType: import('./src/theme').Color
    const DefaultColorsType: import('./src/theme').DefaultColors
    const SizesType: import('./src/theme').Sizes<any>
    const ThemeType: import('./src/theme').Theme
    export type Color = typeof ColorType
    export type DefaultColors = typeof DefaultColorsType
    export type Sizes<T> = typeof SizesType
    export type Theme = typeof ThemeType
    export const defaultColors: DefaultColors
    export const ChimeraTheme: Theme
    export const sizes: Array<keyof Sizes<string>>
    export const extendedSizes: Array<keyof Sizes<string>>
}
