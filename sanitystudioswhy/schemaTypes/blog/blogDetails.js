import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md';
import { GiFilmSpool as icon } from "react-icons/gi";

export default defineType({
    name: 'BlogDetails',
    title: 'BlogDetails',
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
      name:"title",
      title:"Movie Title",
      type:"string",
      validation:Rule=>Rule.required(),
      group:"Main",
     }),
     defineField({
      name:"headingcontent",
      type:"text",
      title:"Heading Content",
      rows:5,
      validation:Rule=>Rule.required(),
      group:"Main",

     }),
     defineField({
      name:"firstcontent",
      type:"text",
      title:"First Content",
      rows:5,
      validation:Rule=>Rule.required(),
      group:"Main",

     }),
     defineField({
      name:"movieimage",
      type:"image",
      title:"Movie Image",
      options: {hotspot: true},
      validation:Rule=>Rule.required(),
      group:"Main",

      

     }),
     defineField({
      name:"secondcontent",
      type:"text",
      title:"Second Content",
      rows:5,
      validation:Rule=>Rule.required(),
      group:"Main",

     }),

    defineField({
      name:"director",
      title:"Director Name",
      type:"text",
      validation:Rule=>Rule.required(),
      group:"Main",
    }),
    defineField({
      name:"directorimage",
      title:"Director Image",
      type:"image",
      options: {hotspot: true},
      validation:Rule=>Rule.required(),
      group:"Main",
    }),
    defineField({
      name:'aboutdirector',
      title:"About director",
      type:"text",
      rows:5,
      validation:Rule=>Rule.required(),
      group:"Main",
    })
 
   ],
    preview: {
      select: {
        title: 'title',
        date: 'releaseDate',
        media: 'movieimage',
       
      },
      
    },
  })