import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md';
import { IoMdPerson as icon } from "react-icons/io";

export default defineType({
    name: 'AboutPage',
    title: 'AboutPage',
    type: 'document',
    icon,
    fields:[
    defineField({
      name:'Image',
      title:"Select The Image",
      type:"image",
    }),
    defineField({
        name:"Name",
        title:" Name",
        type:"string",
    }),
    defineField({
        name:"Role",
        title:"Role",
        type:"string",
    }),
    defineField({
        name:"Description",
        title:"Description",
        type:"text",
        rows:5,
    }),
    defineField({
        name:"Facebook",
        title:"FaceBook URL",
        type:"string",
    }),
    defineField({
        name:"LinkedIn",
        title:"LinkedIn URL",
        type:"string",
    }),
    defineField({
        name:"Youtube",
        title:"YouTube URL",
        type:"string",
    }),
    defineField({
        name:"Twitter",
        title:"Twitter URL",
        type:"string",
    }),
   ],
    preview: {
      select: {
        title: 'Name',
        date: 'releaseDate',
        media: 'Image',
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
    //   prepare(selection) {
    //     const year = selection.date && selection.date.split('-')[0]
    //     const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
    //     return {
    //       title: "BlogDetails",
    //       date: selection.date,
    //       subtitle: cast,
    //       media: selection.media,
    //     }
    //   },
    },
  })