export interface DropdownProps
{
    disableAutoClose: boolean
    horizontal: 'left'|'right'
}

export const dropdownProps = {
    disableAutoClose: {
        type: Boolean,
        default: false
    },

    horizontal: {
        type: String,
        default: 'left',
        validator: (v: string) => ['left', 'right'].includes(v)
    },

    overlay: {
        type: Boolean,
        default: false
    },
}

export default dropdownProps
