import {defineField, defineType} from 'sanity'

import { SiAndroidstudio as icon } from "react-icons/si";

export default defineType({
    name:"studios",
    title:"Why Studio",
    type:"document",
    icon,
    fields:[
        defineField({
            name:"heading",
            title:"First Heading",
            type:"text",
            rows:3,
           

}),

defineField({
    name:"secondheading",
    title:"Second Heading",
    type:"text",
    rows:5
}),
defineField({
    name:"content",
    title:"Content",
    type:"text",
    rows:3
    
}),
defineField({
    name:"image",
    title:"Thumbnail",
    type:"image",
    options: {hotspot: true},
    
}),
defineField({
    name:"youtube",
    title:"YouTube Source Link",
    type:"text",
    rows:20,
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