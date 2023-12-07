import {defineType, defineField} from "sanity";
import {FaPhone} from 'react-icons/fa';
import React from "react";

export const subscription = defineType({
    name: 'subscription',
    type: 'document',
    title: 'Abonnement',
    icon: FaPhone,
    orderings: [
        {
            title: 'By Operator Name A-Z',
            name: 'operatorNameAZ',
            by: [{field: 'operator.navn', direction: 'asc'}]
        },
        {
            title: 'By Operator Name Z-A',
            name: 'operatorNameZA',
            by: [{field: 'operator.navn', direction: 'desc'}]
        },
        {
            title: 'By Subscription Name A-Z',
            name: 'subscriptionNameAZ',
            by: [{field: 'navn', direction: 'asc'}]
        },
        {
            title: 'By Subscription Name Z-A',
            name: 'subscriptionNameZA',
            by: [{field: 'navn', direction: 'desc'}]
        },
        {
            title: 'By Price Low-High',
            name: 'priceLowHigh',
            by: [{field: 'pris', direction: 'asc'}]
        },
        {
            title: 'By Price High-Low',
            name: 'priceHighLow',
            by: [{field: 'pris', direction: 'desc'}]
        },
        {
            title: 'By Data Low-High',
            name: 'dataLowHigh',
            by: [{field: 'datapakke', direction: 'asc'}]
        },
        {
            title: 'By Data High-Low',
            name: 'dataHighLow',
            by: [{field: 'datapakke', direction: 'desc'}]
        },
        {
            title: 'By Age Group',
            name: 'ageGroup',
            by: [{field: 'aldersgruppe', direction: 'asc'}]
        }
    ],
    fields: [
        defineField({
            name: 'operator',
            type: 'reference',
            to: [{type: 'operator'}],
            title: 'Operatør',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'navn',
            type: 'string',
            title: 'Navn',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'pris',
            type: 'number',
            title: 'Pris',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'datapakke',
            type: 'string',
            title: 'Datapakke - Antall GB / Fri data',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'aldersgruppe',
            type: 'string',
            options: {
                list: [
                    {title: 'Voksen (vanlig)', value: 'voksen'},
                    {title: 'Ung', value: 'ung'},
                    {title: 'Junior', value: 'junior'}
                ]
            },
            title: 'Aldersgruppe - Voksen (vanlig) / ung / junior',
            validation: (Rule) => Rule.required()

        }),
        defineField({
            name: 'fritekst',
            type: 'text',
            title: 'Fritekst - Spesielle betingelser, info e.l.'
        }),
        defineField({
            name: 'tjenester',
            type: 'array',
            of: [{type: 'reference', to: {type: 'service'}}],
            title: 'Tjenester'
        }),
    ],
    preview: {
        select: {
            title: 'navn',
            price: 'pris',
            data: 'datapakke',
            operator: 'operator.navn',
            ageGroup: 'aldersgruppe',
            color: 'operator.fargekode.hex',
        },
        prepare(selection) {
            const {title, price, data, operator, ageGroup, color} = selection;
            return {
                // title shyould be 'Title - Price - AgeGroup'
                title: title + '. ' + price + ' kr.',
                subtitle: operator + '. Data: ' + data + ', GB, alder: ' + ageGroup,
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
