import { getCurrentInstance } from 'vue'
import { OrderProps } from '../../props/useOrderProps'
import useGetValueForScreen from '../../useGetValueForScreen'

export default function useApplyOrder (
    overrideOrder: OrderProps['order'] = null,
): string {
    const ctx = getCurrentInstance()
    const orderProp: OrderProps['order'] = overrideOrder === null
        ? ((ctx?.props.order as OrderProps['order']) ?? null)
        : overrideOrder

    if (orderProp === null) {
        return ''
    }

    let order: string|number
    if (typeof orderProp !== 'string' && typeof orderProp !== 'number') {
        order = useGetValueForScreen<string|number>(orderProp)
    } else {
        order = orderProp
    }

    switch(order) {
        case 0: { return 'order-none' }
        case 1: { return 'order-1' }
        case 2: { return 'order-2' }
        case 3: { return 'order-3' }
        case 4: { return 'order-4' }
        case 5: { return 'order-5' }
        case 6: { return 'order-6' }
        case 7: { return 'order-7' }
        case 8: { return 'order-8' }
        case 9: { return 'order-9' }
        case 10: { return 'order-10' }
        case 11: { return 'order-11' }
        case 12: { return 'order-12' }
        case 'first': { return 'order-first' }
        case 'last': { return 'order-last' }
        default: { return '' }
    }
}
