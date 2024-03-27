import {defineField, defineType} from 'sanity'
// import { MdMovieEdit as icon } from "react-icons/md";
import { MdMovie as icon } from 'react-icons/md'
export default defineType({
    name:"moviesslider",
    title:"Movie Slider",
    type:"document",
    icon,
    fields:[
        defineField({
            name:"image",
            title:"Slider Image",
            type:"image",
            options: {hotspot: true},

}),defineField({
    name:"moviename",
    title:"Movie Name",
    type:"string",
}),
defineField({
    name:"moviegenre",
    title:"Movie Genre",
    type:"text",
    rows:3
    
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