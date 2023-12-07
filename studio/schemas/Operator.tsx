import { defineType, defineField } from "sanity";
import { FaBuilding } from 'react-icons/fa'
import React from "react";

// Operatør (Operator) schema
export const operator = defineType({
    name: 'operator',
    type: 'document',
    title: 'Operatør',
    icon: FaBuilding,
    fields: [
        defineField({
            name: 'navn',
            type: 'string',
            title: 'Navn',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'plassering',
            type: 'number',
            title: 'Plassering - For sortering av liste',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'skjultFor',
            type: 'array',
            of: [{type: 'reference', to: {type: 'dealer'}}],
            title: 'Skjult for'
        }),
        defineField({
            name: 'fargekode',
            type: 'color',
            title: 'Fargekode - Main brand color',
            validation: (Rule) => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'navn',
            color: 'fargekode.hex',
        },
        prepare(selection) {
            const {title, color} = selection;
            return {
                title: title,
                subtitle: color,
                media: (
                <span
                    style={{
                        width: '2rem',
                        height: '2rem',

                        backgroundColor: color,
                    }}
                ></span>
                ),
            }
        }
    }
});
