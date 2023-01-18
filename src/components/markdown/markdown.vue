<template>
    <Markdown class="chi-markdown" :source="props.content" />
</template>

<script setup lang="ts">
import Markdown from 'vue3-markdown-it'
import markdownProps, { MarkdownProps } from './markdown.typings'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(markdownProps)
const props = useGenerateProps(setProps, 'markdown') as MarkdownProps
</script>
