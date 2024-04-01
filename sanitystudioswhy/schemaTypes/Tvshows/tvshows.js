import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md'
import { FaTv as icon } from "react-icons/fa";

export default defineType({
    name: 'TvShows',
    title: 'TV Shows',
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
    name:"url",
    title:"Url",
    type:"url",
    validation:Rule=>Rule.required(),
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
        name:"tvshow",
        type:"array",
        title:"TV Show List",
        of:[{
          type:"object",
          fields:[
            {
              name: 'Image',
              title: 'Tv Shows Youtube Url',
              type: 'text',
              validation:Rule=>Rule.required(),
              
            },
            {
              name: "Content",
              title: "Content",
              type:"text",
              rows:10  ,
              validation:Rule=>Rule.required(), 
              
          },{
            name:"Name",
            title:"Name",
            type:"string",
            validation:Rule=>Rule.required(),
            
          }

          ]
        }
        ]
        
      })
     
    //   defineField({
    //     name: "name",
    //     title: "Content",
    //     type:"array",
    //     of: [{ type: "block" }],   
    // }),
    ],
    preview: {
      select: {
        title: 'Name',
        date: 'releaseDate',
        media: 'poster',
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
      prepare(selection) {
        const year = selection.date && selection.date.split('-')[0]
        const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
        return {
          title: 'TvShows',
          date: selection.date,
          subtitle: cast,
          media: selection.media,
        }
      },
    },
  })