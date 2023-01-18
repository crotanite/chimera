import { getCurrentInstance, inject, ref, Ref } from 'vue'
import { ChimeraTheme, Theme } from '../theme'

export default function useTheme (): Ref<Theme> {
    if(getCurrentInstance()) {
        return inject('theme', ref(ChimeraTheme)) as Ref<Theme>
    }
    return ref(ChimeraTheme)
}

// export const useTheme = inject('theme', ChimeraTheme) as Theme

// export const useTheme = ref<Theme>(ChimeraTheme)

// if(getCurrentInstance()) {
//     const customTheme = inject('theme', null) as Theme
//     if (customTheme !== null) {
//         useTheme.value = customTheme
//     }
// }

// window.addEventListener('resize', () => {
//     if(getCurrentInstance()) {
//         const customTheme = inject('theme', null) as Theme
//         if (customTheme !== null) {
//             useTheme.value = customTheme
//         }
//     }
// })

// export default useTheme
