import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md'
import { MdLiveTv as icon} from "react-icons/md";

export default defineType({
    name: 'TvAdvertisement',
    title: 'Tv Advertisement',
    type: 'document',
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
        name:"url",
        title:"Link url",
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
        name:"tvad",
        title:"Tv Ad List",
        type:"array",
        of:[
          {
            type:"object",
            fields:[
              {
                name: 'Image',
                title: 'Tv Shows Url',
                type: 'text',
                placeholder:"(kindly Copy the Source from the Embeded Link Provided in Youtube )",
                rows:3,
                validation:Rule=>Rule.required(),
                
              },{
                name:"Title",
                title:"Title",
                type:"string",
                validation:Rule=>Rule.required(),
              
              },{
                name: "Content",
                title: "Content",
                type:"text",
                rows:10,
                validation:Rule=>Rule.required(),
                
            }
            ]
          }
        ]
      })

    ],
    preview: {
      select: {
        title: 'Title',
        date: 'releaseDate',
        media: 'image',
     
      },
      // prepare(selection) {
      //   const year = selection.date && selection.date.split('-')[0]
      //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
      //   return {
      //     title: 'Titles',
      //     date: selection.date,
      //     subtitle: cast,
      //     media: selection.media,
      //   }
      // },
    },
  })