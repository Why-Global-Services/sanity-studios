import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md'
import { SiWebstorm as icon} from "react-icons/si";

export default defineType({
    name: 'WebSeries',
    title: 'Web series',
    type: 'document',
    icon,
    groups:[
      {
        name:"seo",
        title:"SEO",
      },{
        name:"Main",
        title:"Main Content"
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
        name:"url",
        title:"Link url",
        type:"string",
        group:"seo",
      }),

      defineField({
        name:"series",
        title:"Series",
        type:"array",
        of:[
          {
            type:"object",
            fields:[
              {
                name: 'Image',
                title: 'Select Image',
                type: 'image',
                
                validation:Rule=>Rule.required(),
              },{
                name:"Title",
                title:"Title",
                type:"string",
                
                validation:Rule=>Rule.required(),
              },
              {
                name: "Content",
                title: "Content",
                type:"text",
                
                rows:10,
                validation:Rule=>Rule.required(),
            },
            {
              name:"IMDBRating",
              title:"IMDB Rating",
              type:"number",
              
              validation:Rule=>Rule.required(),
            },{
              name:"ReleasingYear",
              title:"Releasing Year",
              
              validation:Rule=>Rule.required(),
              type:"number"
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
        media: 'Image',
        
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
      prepare(selection) {
        const year = selection.date && selection.date.split('-')[0]
        const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
        return {
          title: 'WebSeries',
          date: selection.date,
          subtitle: cast,
          media: selection.media,
        }
      },
    },
  })