import { defineConfig } from 'unocss/vite'
import {
    presetAttributify,
    presetUno,
    presetIcons,
    transformerVariantGroup,
    transformerDirectives
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
    rules: [
        [/clip-path-\[(.+)\]/, (match) => ({ 'clip-path': match[1].replace(/_/g, ' ') })],
        ['flex-content-baseline', { 'align-content': 'baseline' }]
    ],
    shortcuts: [
        [
            // flex 居中
            /^flex-center(.)*/,
            ([, match]) => {
                if (match?.includes('x')) return 'flex justify-center'
                if (match?.includes('y')) return 'flex items-center'

                return 'flex justify-center items-center'
            }
        ],
        ['f-c-c', 'flex justify-center items-center'],
        ['wh-full', 'w-full h-full']
    ],
    presets: [
        presetAttributify({
            prefix: 'un-',
            prefixedOnly: true
        }),
        presetUno(),
        presetIcons({
            scale: 1.2, // unocss 官方配置推荐 1.2
            warn: true,
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle'
            },
            customizations: {
                transform(svg, collection, icon) {
                    // cf-全称colorful，表示svg有多种颜色，使用svg自己的颜色，父元素color不会起作用
                    if (icon.startsWith('cf-')) {
                        return svg
                    }
                    // 去除svg本身的颜色，改用继承父元素color
                    return svg.replace(/fill(-rule)?="((?!none).*?)"/g, 'fill$1="currentColor"')
                }
            },
            collections: {
                'td-svg': FileSystemIconLoader('./src/assets/icons')
            }
        })
    ],
    transformers: [transformerVariantGroup(), transformerDirectives()]
})
