import {defineField, defineType} from 'sanity'
import { MdEventAvailable as icon } from "react-icons/md";
export default defineType({
    name:'activity',
    title: 'Event',
    type: 'document',
    icon,
    groups: [
        {
          name: 'seo',
          title: 'SEO',
        },
        {
            name:"Main",
            title:"Main",
        }
      ],
    fields: [
        defineField({
            name:"metaTitle",
            title:"Meta Title",
            type:"string",
            group:"seo",
          }),
          defineField({
            name:"MetaDescription",
            title:"Meta Description",
            type:"string",
            group:"seo",
          }),
          defineField({
            name:"AllData",
            title:"All Data",
            type:"string",
            group:"seo",
          }),
          defineField({
            name:"FocusKeyword",
            title:"Focus Keyword",
            type:"string",
            group:"seo",
          }),
        defineField({
            name:"Title",
            title:"Meta Data",
            type:"string",
            group:"seo",
        }),
        defineField({
            name: 'name',
            title: 'Event name',
            type:'text',
            validation:Rule=>Rule.required(),
            group:"Main",
            
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type:'text',
            validation:Rule=>Rule.required(),
            group:"Main",
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
            validation:Rule=>Rule.required(),
            group:"Main",
        }),
        defineField({
            name: 'eventimage',
            title: 'Event image',
            type: 'image',
            options:{hotspot:true},
            validation:Rule=>Rule.required(),
            group:"Main",
        }),
     
    
    ],preview:{
        select: {
            title: 'name',
            media: 'eventimage',
        },
    }
    
})