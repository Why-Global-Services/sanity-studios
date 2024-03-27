import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md';

export default defineType({
    name: 'BlogDetails',
    title: 'BlogDetails',
    type: 'document',
    icon,
    fields:[
    // defineField({
    //   name:'Image',
    //   title:"Select The Image",
    //   type:"array",
    //   of:[
    //     { type: "block" },
    //   ]
    // }),
     defineField({
      name:"title",
      title:"Movie Title",
      type:"string",
     }),
     defineField({
      name:"headingcontent",
      type:"text",
      title:"Heading Content",
      rows:5

     }),
     defineField({
      name:"firstcontent",
      type:"text",
      title:"First Content",
      rows:5

     }),
     defineField({
      name:"movieimage",
      type:"image",
      title:"Movie Image",
      options: {hotspot: true},

      

     }),
     defineField({
      name:"secondcontent",
      type:"text",
      title:"Second Content",
      rows:5

     }),

    defineField({
      name:"director",
      title:"Director Name",
      type:"text",
    }),
    defineField({
      name:"directorimage",
      title:"Director Image",
      type:"image",
      options: {hotspot: true},
    }),
    defineField({
      name:'aboutdirector',
      title:"About director",
      type:"text",
      rows:5
    })
 
   ],
    preview: {
      select: {
        title: 'title',
        date: 'releaseDate',
        media: 'directorimage',
       
      },
      
    },
  })