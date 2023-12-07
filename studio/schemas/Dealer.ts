import { defineType, defineField } from "sanity";
import { FaShoppingCart } from 'react-icons/fa';

// Dealer schema
export const dealer = defineType({
    name: 'dealer',
    type: 'document',
    title: 'Dealer',
    icon: FaShoppingCart,
    fields: [
        defineField({
            name: 'navn',
            type: 'string',
            title: 'Navn',
            validation: (Rule) => Rule.required()
        }),
    ]
});

