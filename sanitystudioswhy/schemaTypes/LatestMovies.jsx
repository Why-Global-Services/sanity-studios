import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
    name:"LatestMovies",
    title: "Latest Movies Text Content",
    type:"document",
    fields:[defineField({
        name:"heading",
        title:"Heading",
        type:"string"
    },
    
    ),defineField({
        name:"subheading",
        title:"Subheading",
        type:"string"
    }),
    defineField({
        name:"text",
        title:"Text",
        
        type:"text",
        rows:10
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