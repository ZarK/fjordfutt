import { defineType, defineField } from "sanity";
import { FaCog } from 'react-icons/fa';

// Tjenester (Services) schema
export const service = defineType({
    name: 'service',
    type: 'document',
    title: 'Tjenester',
    icon: FaCog,
    fields: [
        defineField({
            name: 'navn',
            type: 'string',
            title: 'Navn',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'kategori',
            type: 'reference',
            to: [{type: 'category'}],
            title: 'Kategori',
            validation:  (Rule) => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'navn',
            subtitle: 'kategori.navn'
        }
    }
});



