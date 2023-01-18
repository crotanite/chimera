import screenSize from './useScreenSize'
import { extendedSizes, Sizes } from '../theme'

export default function useGetValueForScreen<T> (sizes: Sizes<T>, defaultValue: any = null): T {
    switch(screenSize.value) {
        case 'xxl': {
            for (let i = Object.values(extendedSizes).indexOf('xxl'); i < Object.values(extendedSizes).length; i++) {
                if (typeof sizes[Object.values(extendedSizes)[i]] !== 'undefined') {
                    return sizes[Object.values(extendedSizes)[i]]
                }
            }
        }
        case 'xl': {
            for (let i = Object.values(extendedSizes).indexOf('xl'); i < Object.values(extendedSizes).length; i++) {
                if (typeof sizes[Object.values(extendedSizes)[i]] !== 'undefined') {
                    return sizes[Object.values(extendedSizes)[i]]
                }
            }
        }
        case 'lg': {
            for (let i = Object.values(extendedSizes).indexOf('lg'); i < Object.values(extendedSizes).length; i++) {
                if (typeof sizes[Object.values(extendedSizes)[i]] !== 'undefined') {
                    return sizes[Object.values(extendedSizes)[i]]
                }
            }
        }
        case 'md': {
            for (let i = Object.values(extendedSizes).indexOf('md'); i < Object.values(extendedSizes).length; i++) {
                if (typeof sizes[Object.values(extendedSizes)[i]] !== 'undefined') {
                    return sizes[Object.values(extendedSizes)[i]]
                }
            }
        }
        case 'sm': {
            for (let i = Object.values(extendedSizes).indexOf('sm'); i < Object.values(extendedSizes).length; i++) {
                if (typeof sizes[Object.values(extendedSizes)[i]] !== 'undefined') {
                    return sizes[Object.values(extendedSizes)[i]]
                }
            }
        }
        case 'xs': {
            for (let i = Object.values(extendedSizes).indexOf('xs'); i < Object.values(extendedSizes).length; i++) {
                if (typeof sizes[Object.values(extendedSizes)[i]] !== 'undefined') {
                    return sizes[Object.values(extendedSizes)[i]]
                }
            }
        }
        case 'xxs': {
            for (let i = Object.values(extendedSizes).indexOf('xxs'); i < Object.values(extendedSizes).length; i++) {
                if (typeof sizes[Object.values(extendedSizes)[i]] !== 'undefined') {
                    return sizes[Object.values(extendedSizes)[i]]
                }
            }
        }
        default: return defaultValue
    }
}
