import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md'
import { FaBlog as icon } from "react-icons/fa";

export default defineType({
  name: 'Blog',
  title: 'BlogHome',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'Image',
      title: 'Select The Blog Image',
      type: 'image',
    }),
    defineField({
        name: "Name",
        title: "Title",
        type:"string",    
    }),
    defineField({
        name:"Title",
        title:"Name",
        type:"string",
    }),
    defineField({
        name:"Author",
        title:"Author",
        type:"string"
    }),
    defineField({
        name:"Content",
        title:"Content",
        type:"text",
        rows:5,
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
    // prepare(selection) {
    //   const year = selection.date && selection.date.split('-')[0]
    //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

    //   return {
    //     title: 'Blog',
    //     date: selection.date,
    //     subtitle: cast,
    //     media: selection.media,
    //   }
    // },
  },
})
