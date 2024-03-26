import {defineField, defineType} from 'sanity'

export default defineType({
    name:'activity',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Event name',
            type:'text',
            
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type:'text',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
        defineField({
            name: 'eventimage',
            title: 'Event image',
            type: 'image',
            options:{hotspot:true}
        }),
     
    
    ],preview:{
        select: {
            title: 'name',
            media: 'eventimage',
        },
    }
    
})