import { useDark as darkToggle } from '@vueuse/core'

export const isDark = darkToggle()

export default function useDark() {
    return isDark
}
