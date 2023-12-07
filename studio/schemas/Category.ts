import { defineType, defineField } from "sanity";
import { FaFolderOpen } from 'react-icons/fa';

// Kategori (Category) schema
export const category = defineType({
    name: 'category',
    type: 'document',
    title: 'Kategori',
    icon: FaFolderOpen,
    fields: [
        defineField({
            name: 'navn',
            type: 'string',
            title: 'Navn',
            validation: (Rule) => Rule.required()
        }),
    ]
});

