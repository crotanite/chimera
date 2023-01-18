<template>
    <div class="flex -space-x-3">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { avatarGroupProps, injectAvatarGroupName, AvatarGroupProps } from './avatar.typings'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(avatarGroupProps)
const props = useGenerateProps(setProps, 'avatarGroup') as AvatarGroupProps

provide(injectAvatarGroupName, props)
</script>

<script lang="ts">
export default {
    name: 'ChiAvatarGroup'
}
</script>
