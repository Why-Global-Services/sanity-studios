import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md'
import { FaBlog as icon } from "react-icons/fa";

export default defineType({
  name: 'Blog',
  title: 'BlogHome',
  type: 'document',
  icon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'Main',
      title: 'Main',
    },
  ],
  fields:[
    defineField({
      name: 'Image',
      title: 'Select The Blog Image',
      type: 'image',
      validation:Rule=>Rule.required(),
      group:"Main",
    }),
    defineField({
        name: "Name",
        title: "Name",
        type:"string", 
        validation:Rule=>Rule.required(), 
        group:"Main",  
    }),
    defineField({
      name: "Title",
      title: "Title",
      type:"string", 
      validation:Rule=>Rule.required(), 
      group:"Main",  
  }),
    defineField({
        name:"Author",
        title:"Author",
        type:"string",
        validation:Rule=>Rule.required(),
        group:"Main",
    }),
    defineField({
        name:"Content",
        title:"Content",
        type:"text",
        rows:5,
        validation:Rule=>Rule.required(),
        group:"Main",
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
