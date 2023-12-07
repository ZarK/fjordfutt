import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {myStructure} from './deskStructure'

export default defineConfig({
    name: 'default',
    title: 'sanity-battle-demo',

    projectId: '8syanzro',
    dataset: 'production',

    plugins: [
        deskTool({
            structure: myStructure,
        })
        , visionTool()
        , colorInput()
    ],

    schema: {
        types: schemaTypes,
    },
})
