import {defineField, defineType} from 'sanity'

import { SiAndroidstudio as icon } from "react-icons/si";

export default defineType({
    name:"studios",
    title:"Why Studio",
    type:"document",
    icon,
    groups:[
        {
          name:"seo",
          title:"SEO",
        },
        {
            name:"Main",
            title:"Main",
        }
      ],
    fields:[
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
            name:"heading",
            title:"First Heading",
            type:"text",
            rows:3,
            validation:Rule=>Rule.required(),
            group:"Main",
           

}),

defineField({
    name:"secondheading",
    title:"Second Heading",
    type:"text",
    rows:5,
    validation:Rule=>Rule.required(),
    group:"Main",
}),
defineField({
    name:"content",
    title:"Content",
    type:"text",
    rows:3,
    validation:Rule=>Rule.required(),
    group:"Main",
    
}),
defineField({
    name:"image",
    title:"Thumbnail",
    type:"image",
    options: {hotspot: true},
    validation:Rule=>Rule.required(),
    group:"Main",
    
}),
defineField({
    name:"youtube",
    title:"YouTube Source Link",
    type:"text",
    rows:20,
    validation:Rule=>Rule.required(),
    group:"Main",
})

],preview:{
    select: {
        title: 'heading',
        date: 'releaseDate',
        media: 'image',
       
      },
    // prepare(selection) {
    //     const year = selection.date && selection.date.split('-')[0]
    //     const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
    //     return {
    //       title: 'moviename',
    //       date: selection.date,
    //       subtitle: cast,
    //       media: selection.media,
    //     }
    //   },
}
})