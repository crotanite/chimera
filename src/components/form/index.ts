import { ChiError } from './error'
import { ChiInput, ChiInputWithLabel } from './input'
import { ChiLabel } from './label'
import { ChiToggle, ChiToggleWithLabel } from './toggle'
// @ts-ignore
import { default as ChiForm } from './form.vue'

ChiForm.Error = ChiError
ChiForm.Input = ChiInput
ChiForm.InputWithLabel = ChiInputWithLabel
ChiForm.Label = ChiLabel
ChiForm.Toggle = ChiToggle
ChiForm.ToggleWithLabel = ChiToggleWithLabel

export {
    ChiForm,
    ChiError,
    ChiInput,
    ChiInputWithLabel,
    ChiLabel,
    ChiToggle,
    ChiToggleWithLabel}
export * from './form.typings'
