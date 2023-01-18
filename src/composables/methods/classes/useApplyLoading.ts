import { getCurrentInstance } from 'vue'
import { LoadingProps } from '../../props/useLoadingProps'

export default function useApplyLoading (
    overrideLoading: LoadingProps['loading'] = null,
    loadingClass: string = 'cursor-wait opacity-50',
    defaultClass: string = ''
): string {
    const ctx = getCurrentInstance()
    const loading: LoadingProps['loading'] = overrideLoading === null
        ? ((ctx?.props.loading as LoadingProps['loading']) ?? false)
        : overrideLoading

    return loading ? loadingClass : defaultClass
}
