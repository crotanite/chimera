import { AccordionProps, AccordionItemProps, AccordionTitleProps, AccordionPanelProps } from '../components/accordion'
import { AlertProps } from '../components/alert'
import { AvatarGroupProps, AvatarProps } from '../components/avatar'
import { ButtonGroupProps, ButtonProps } from '../components/button'
import { ColumnProps } from '../components/column'
import { DivProps } from '../components/div'
import { FlexProps } from '../components/flex'
import { FormProps } from '../components/form'
import { FormErrorProps } from '../components/form/error'
import { FormInputProps } from '../components/form/input'
import { FormLabelProps } from '../components/form/label'
import { FormToggleProps } from '../components/form/toggle'
import { GridProps } from '../components/grid'
import { HeadingProps } from '../components/heading'
import { LinkProps } from '../components/link'
import { ListProps, ListItemProps } from '../components/list'
import { MarkdownProps } from '../components/markdown'
import { OffcanvasProps, OffcanvasDrawerProps, OffcanvasContentProps } from '../components/offcanvas'
import { ScreenProps } from '../components/screen'
import { TabsProps, TabsTabProps } from '../components/tabs'
import { SetThemes } from '../composables/props/useThemeProps'

export interface Color {
    0?: string
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
}

export interface DefaultColors {
    [key: string]: string|Color
    inherit: string
    current: string
    transparent: string
    black: string
    white: string
    slate: Color
    gray: Color
    zinc: Color
    neutral: Color
    stone: Color
    red: Color
    orange: Color
    amber: Color
    yellow: Color
    lime: Color
    green: Color
    emerald: Color
    teal: Color
    cyan: Color
    sky: Color
    blue: Color
    indigo: Color
    violet: Color
    purple: Color
    fuchsia: Color
    pink: Color
    rose: Color
}

export interface Sizes<T> {
    xxl?: T
    xl: T
    lg: T
    md: T
    sm: T
    xs: T
    xxs?: T
}

export interface Theme {
    avatar: Sizes<string>
    borderRadius: Sizes<string>
    boxShadow: Sizes<string>
    colors: {
        [key: string]: string|Color
        primary?: Color
        system?: Color
    }
    nonLevelledColors: Array<string>
    primaryFallback: string
    screenSizes: Sizes<number>
    spacing: Sizes<string>
    systemFallback: string
    ui: {
        accordion: AccordionProps,
        accordionItem: AccordionItemProps,
        accordionTitle: AccordionTitleProps,
        accordionPanel: AccordionPanelProps,
        alert: AlertProps & SetThemes,
        avatarGroup: AvatarGroupProps,
        avatar: AvatarProps,
        buttonGroup: ButtonGroupProps,
        button: ButtonProps,
        column: ColumnProps,
        div: DivProps,
        flex: FlexProps,
        form: FormProps,
        formError: FormErrorProps,
        formInput: FormInputProps,
        formLabel: FormLabelProps,
        formToggle: FormToggleProps,
        grid: GridProps,
        heading: HeadingProps,
        link: LinkProps,
        list: ListProps,
        listItem: ListItemProps,
        markdown: MarkdownProps,
        offcanvas: OffcanvasProps,
        offcanvasContent: OffcanvasContentProps,
        offcanvasDrawer: OffcanvasDrawerProps,
        screen: ScreenProps,
        tabs: TabsProps,
        tabsTab: TabsTabProps,
    }
}

export const defaultColors: DefaultColors = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
    },
    gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
    },
    zinc: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
    },
    neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
    },
    stone: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
    },
    red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
    },
    orange: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
    },
    amber: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
    },
    yellow: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
    },
    lime: {
        50: '#f7fee7',
        100: '#ecfccb',
        200: '#d9f99d',
        300: '#bef264',
        400: '#a3e635',
        500: '#84cc16',
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#3f6212',
        900: '#365314',
    },
    green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
    },
    emerald: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
    },
    teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
    },
    cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
    },
    sky: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
    },
    blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
    },
    indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
    },
    violet: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
    },
    purple: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
    },
    fuchsia: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
    },
    pink: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
    },
    rose: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#9f1239',
        900: '#881337',
    },
}

export const ChimeraTheme: Theme = {
    avatar: {
        xs: '1.5rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
        xl: '3.5rem',
    },
    borderRadius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem'
    },
    boxShadow: {
        xs: '0 1px 2px 0 var(--tw-shadow-color)',
        sm: '0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px 0 var(--tw-shadow-color)',
        md: '0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)',
        lg: '0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color)',
        xl: '0 20px 25px -5px var(--tw-shadow-color), 0 10px 10px -5px var(--tw-shadow-color)',
    },
    colors: defaultColors,
    nonLevelledColors: ['inherit', 'current', 'transparent', 'black', 'white'],
    primaryFallback: 'blue',
    screenSizes: {
        xxs: 0,
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536
    },
    spacing: {
        xxs: '0.125rem',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem'
    },
    systemFallback: 'zinc',
    ui: {
        accordion: {
            color: 'system',
            component: 'div',
            icon: null,
            iconSide: 'right',
            keepIconWhenLoading: false,
            p: null,
            px: 'md',
            py: 'sm',
            rounded: 'md',
            spacingY: 0,
            variant: 'filled',
        },
        accordionItem: {
            component: 'div',
            customControl: false,
            disabled: false,
        }, // inherits from "accordion"
        accordionTitle: {
            color: null,
            component: 'div',
            variant: null,
        },
        accordionPanel: {
            color: null,
            component: 'div',
            variant: 'pale',
        },
        alert: {
            border: 0,
            component: 'div',
            p: null,
            px: 'md',
            py: 'sm',
            rounded: null,
            shadow: null,
            theme: 'primary',
            themes: {
                primary: 'primary',
                error: 'red',
                info: 'blue',
                warning: 'yellow',
                success: 'green',
            }
        },
        avatarGroup: {
            border: 0,
            color: 'system',
            component: 'div',
            rounded: 'full',
            size: 'md',
            variant: 'filled',
        },
        avatar: {
            src: null,
        }, // inherits from "avatarGroup"
        buttonGroup: {
            border: 0,
            color: 'primary',
            component: 'div',
            dense: false,
            disabled: false,
            forceText: null,
            loading: false,
            rounded: null,
            shadow: null,
            size: 'sm',
            variant: 'filled',
        },
        button: {
            component: 'button',
        }, // inherits from "buttonGroup"
        column: {
            component: 'div',
            end: null,
            grow: null,
            order: null,
            shrink: null,
            span: null,
            start: null,
        },
        div: {
            border: null,
            variant: null,
            color: null,
            component: 'div',
            grow: null,
            shrink: null,
            flex: false,
            flexDirection: null,
            flexItems: null,
            flexJustify: null,
            flexWrap: null,
            forceText: null,
            gap: null,
            gapX: null,
            gapY: null,
            end: null,
            span: null,
            start: null,
            grid: null,
            cols: null,
            flow: null,
            rows: null,
            height: null,
            maxHeight: null,
            hover: null,
            order: null,
            p: null,
            px: null,
            py: null,
            rounded: null,
            shadow: null,
            width: null,
            maxWidth: null
        },
        flex: {
            component: 'div',
            flex: true,
            flexDirection: null,
            flexItems: null,
            flexJustify: null,
            flexWrap: null,
            gap: null,
            gapX: null,
            gapY: null
        },
        form: {
            border: 1,
            component: 'form',
            p: null,
            px: 'md',
            py: null,
            rounded: null,
            spacingY: 3,
        },
        formError: {},
        formInput: {
            disabled: false,
        },
        formLabel: {},
        formToggle: {
            color: 'primary',
            variant: 'filled',
        },
        grid: {
            component: 'div',
            gap: 'md',
            gapX: null,
            gapY: null,
            grid: true,
            cols: 12,
            flow: 'row',
            rows: 0
        },
        heading: {
            level: 3,
        },
        link: {
            color: 'primary',
            component: 'a',
            variant: 'transparent'
        },
        list: {
            color: 'system',
            component: 'div',
            hover: true,
            p: null,
            px: 'sm',
            py: 'xs',
            rounded: null,
            spacingY: 0,
            variant: 'filled',
        },
        listItem: {
            component: 'div',
            spacingX: 3,
        }, // inherits from "list"
        markdown: {},
        offcanvas: {},
        offcanvasContent: {
            p: 'md',
            px: null,
            py: null,
        },
        offcanvasDrawer: {
            breakpoints: ['lg', 'xl', 'xxl'],
            color: 'system',
            component: 'div',
            p: 'md',
            px: null,
            py: null,
            side: 'left',
            variant: 'filled',
            width: 250,
        },
        screen: {
            color: 'system',
            variant: 'filled'
        },
        tabs: {
            color: 'primary',
            flexJustify: 'start',
            p: null,
            px: 'md',
            py: 'sm',
            rounded: null,
            variant: 'transparent',
        },
        tabsTab: {}
    }
}

export const sizes: Array<keyof Sizes<string>> = ['xl', 'lg', 'md', 'sm', 'xs']
export const extendedSizes: Array<keyof Sizes<string>> = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']
