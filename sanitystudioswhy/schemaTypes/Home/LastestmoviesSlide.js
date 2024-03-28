import {defineField, defineType} from 'sanity'
// import { MdMovieEdit as icon } from "react-icons/md";
import { MdMovie as icon } from 'react-icons/md'
export default defineType({
    name:"moviesslider",
    title:"Movie Slider",
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
            name:"image",
            title:"Slider Image",
            type:"image",
            options: {hotspot: true},
            validation:Rule=>Rule.required(),
            group:"Main",

}),defineField({
    name:"moviename",
    title:"Movie Name",
    type:"string",
    validation:Rule=>Rule.required(),
    group:"Main",
}),
defineField({
    name:"moviegenre",
    title:"Movie Genre",
    type:"text",
    rows:3,
    validation:Rule=>Rule.required(),
    group:"Main",
    
})

],preview:{
    select: {
        title: 'moviename',
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