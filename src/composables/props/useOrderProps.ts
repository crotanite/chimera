import { Sizes } from '../../theme'

export const orderOptions = [null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'first', 'last']

export interface OrderProps {
    order?: null|number|string|Sizes<number|string>
}

export default function useOrderProps (props: OrderProps = null) {
    return {
        order: {
            type: [Number, String, Object as () => Sizes<number|string>],
            default: props === null || !props.hasOwnProperty('order') ? null : props.order,
            validator: (v: null|number|string|object) => typeof v === 'number' || typeof v === 'string' ? orderOptions.includes(v) : true,
        },
    }
}

interface Props {
    order: { default: OrderProps['order'] }
}

export function orderArgs (props: Props) {
    return {
        order: props === null ? useOrderProps().order.default : props.order.default
    }
}

export function orderArgTypes (props: Props = null) {
    return {
        order: {
            control: 'select',
            description: 'Rearrange the component order within a `ChiFlex` or `ChiGrid` parent.',
            options: orderOptions,
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props === null ? useOrderProps().order.default : props.order.default)
                },
                type: {
                    summary: 'number|string|Sizes'
                },
            }
        }
    }
}
