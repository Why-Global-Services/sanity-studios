import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
    name:"LatestMovies",
    title: "Latest Movies Text Content",
    type:"document",
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
        name:"heading",
        title:"Heading",
        type:"string",
        validation:Rule=>Rule.required(),
        group:"Main",
    },
    
    ),defineField({
        name:"subheading",
        title:"Subheading",
        type:"string",
        validation:Rule=>Rule.required(),
        group:"Main",
    }),
    defineField({
        name:"text",
        title:"Text",
        validation:Rule=>Rule.required(),
        type:"text",
        rows:10,
        group:"Main",
    })
    // ,defineField({
    //     name:"image",
    //     title:"Image",
    //     type:"image"
    // })

],
    preview: {
        
        prepare(selection) {
          const year = selection.date && selection.date.split('-')[0]
          const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
    
          return {
            title: "Latest Movie Content",
            date: selection.date,
            subtitle: cast,
            media: selection.media,
          }
        },
      },
})