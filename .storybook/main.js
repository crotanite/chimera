module.exports = {
    "stories": [
        "../src/components/**/*.stories.js",
        "../src/ui/**/*.stories.js"
    ],
    "addons": [
        "storybook-darkmode-vue/register",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    "framework": "@storybook/vue3",
    "core": {
        "builder": "@storybook/builder-vite"
    },
    "features": {
        "storyStoreV7": true
    }
}
