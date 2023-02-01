import { action } from '@storybook/addon-actions'
import { ChiForm, formPropsOptions } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import { contentArgs, contentArgTypes } from '../../composables/props/useContentProps'
import { disabledArgs, disabledArgTypes } from '../../composables/props/useDisabledProps'
import { errorArgs, errorArgTypes } from '../../composables/props/useErrorProps'
import { labelArgs, labelArgTypes } from '../../composables/props/useLabelProps'
import { modelValueArgs, modelValueArgTypes } from '../../composables/props/useModelValueProps'
import { spacingArgs, spacingArgTypes } from '../../composables/props/useSpacingProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const formProps = useGetThemeProperty('ui.form')
const formInputProps = useGetThemeProperty('ui.formInput')
const formToggleProps = useGetThemeProperty('ui.formToggle')

export default {
    title: 'Components/Form',
    component: ChiForm,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiForm` component.'
            },
        },
    },
}

export const Default = (args) => ({
    components: {
        ChiForm,
        'ChiForm.Input': ChiForm.Input,
        'ChiForm.InputWithLabel': ChiForm.InputWithLabel,
        'ChiForm.NativeSelect': ChiForm.NativeSelect,
        'ChiForm.NativeSelectWithLabel': ChiForm.NativeSelectWithLabel,
        'ChiForm.Toggle': ChiForm.Toggle,
        'ChiForm.ToggleWithLabel': ChiForm.ToggleWithLabel,
    },
    setup() { return { args } },
    template: `
<ChiForm v-bind="args">
    <ChiForm.Input
        name="input-1"
        placeholder="Input"
    />
    <ChiForm.InputWithLabel
        description="Enter your input"
        error="Incorrect input"
        label="Input With Label"
        placeholder="Input With Label"
        name="input-2"
        type="email"
    />
    <ChiForm.NativeSelectWithLabel
        description="Select an option"
        error="Incorrect selection"
        label="Select With Label"
    >
        <option value="first">First</option>
        <option value="second">Second</option>
    </ChiForm.NativeSelectWithLabel>
    <ChiForm.NativeSelect>
        <option value="first">First</option>
        <option value="second">Second</option>
    </ChiForm.NativeSelect>
    <ChiForm.Toggle name="toggle-1" />
    <ChiForm.ToggleWithLabel
        description="Select"
        label="Toggle With Label"
        name="toggle-2"
    />
</ChiForm>
    `
})
Default.args = {
    ...spacingArgs(formProps, formPropsOptions.spacing),
}
Default.argTypes = {
    ...spacingArgTypes(formProps, formPropsOptions.spacing),
    default: slotArgType('default'),
}

export const Input = (args) => ({
    components: {
        ChiForm,
        'ChiForm.Input': ChiForm.Input,
    },
    setup() { return { args } },
    template: `
<ChiForm>
    <ChiForm.Input v-bind="args"
        name="inputWithLabel"
    />
</ChiForm>
    `,
})
Input.args = {
    ...modelValueArgs({ modelValue: 'Input' }),
}
Input.argTypes = {
    ...modelValueArgTypes(formInputProps),
}

export const InputWithLabel = (args) => ({
    components: {
        ChiForm,
        'ChiForm.InputWithLabel': ChiForm.InputWithLabel,
    },
    setup() { return { args } },
    template: `
<ChiForm>
    <ChiForm.InputWithLabel v-bind="args"
        name="inputWithLabel"
    />
</ChiForm>
    `,
})
InputWithLabel.args = {
    ...labelArgs({ label: 'Input With Label', description: 'Enter your input.' }),
    ...disabledArgs(formInputProps),
    ...errorArgs({ error: 'Incorrect Input' }),
    ...modelValueArgs({ modelValue: 'Input' }),
    withoutHeight: false,
}
InputWithLabel.argTypes = {
    ...labelArgTypes(formInputProps),
    ...disabledArgTypes(formInputProps),
    ...errorArgTypes(formInputProps),
    ...modelValueArgTypes(formInputProps),
}

export const Toggle = (args) => ({
    components: {
        ChiForm,
        'ChiForm.Toggle': ChiForm.Toggle
    },
    methods: { action: action('clicked') },
    setup() { return { args } },
    template: `
<ChiForm>
    <ChiForm.Toggle name="toggle" v-bind="args" @update:model-value="action" />
</ChiForm>
    `,
})
Toggle.args = {
    ...colorArgs(formToggleProps, ['color']),
    ...contentArgs({ content: '' }),
    ...disabledArgs(formToggleProps),
    ...modelValueArgs({ modelValue: false }),
}
Toggle.argTypes = {
    ...colorArgTypes(formToggleProps, ['color']),
    ...contentArgTypes(formToggleProps),
    ...disabledArgTypes(formToggleProps),
    ...modelValueArgTypes(formInputProps, 'boolean'),
}

export const ToggleWithLabel = (args) => ({
    components: {
        ChiForm,
        'ChiForm.ToggleWithLabel': ChiForm.ToggleWithLabel
    },
    methods: { action: action('clicked') },
    setup() { return { args } },
    template: `
<ChiForm>
    <ChiForm.ToggleWithLabel v-bind="args" @update:model-value="action" />
</ChiForm>
    `,
})
ToggleWithLabel.args = {
    ...colorArgs(formToggleProps, ['color']),
    ...contentArgs({ content: '' }),
    ...disabledArgs(formToggleProps),
    ...labelArgs({ label: 'Toggle With Label', description: 'Select.' }),
    ...modelValueArgs({ modelValue: false }),
}
ToggleWithLabel.argTypes = {
    ...colorArgTypes(formToggleProps, ['color']),
    ...contentArgTypes(formToggleProps),
    ...disabledArgTypes(formToggleProps),
    ...labelArgTypes(formInputProps),
    ...modelValueArgTypes(formInputProps, 'boolean'),
}
