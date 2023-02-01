import { ChiError } from './error'
import { ChiInput, ChiInputWithLabel } from './input'
import { ChiLabel } from './label'
import { ChiNativeSelect, ChiNativeSelectWithLabel } from './native-select'
import { ChiToggle, ChiToggleWithLabel } from './toggle'
// @ts-ignore
import { default as ChiForm } from './form.vue'

ChiForm.Error = ChiError
ChiForm.Input = ChiInput
ChiForm.InputWithLabel = ChiInputWithLabel
ChiForm.Label = ChiLabel
ChiForm.NativeSelect = ChiNativeSelect
ChiForm.NativeSelectWithLabel= ChiNativeSelectWithLabel
ChiForm.Toggle = ChiToggle
ChiForm.ToggleWithLabel = ChiToggleWithLabel

export {
    ChiForm,
    ChiError,
    ChiInput,
    ChiInputWithLabel,
    ChiLabel,
    ChiNativeSelect,
    ChiNativeSelectWithLabel,
    ChiToggle,
    ChiToggleWithLabel}
export * from './form.typings'
