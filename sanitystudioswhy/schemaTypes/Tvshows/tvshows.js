import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md'
import { FaTv as icon } from "react-icons/fa";

export default defineType({
    name: 'TvShows',
    title: 'TV Shows',
    type: 'document',
    icon,
    fields: [
      defineField({
        name: 'Image',
        title: 'Tv Shows Url',
        type: 'text',
      }),
      defineField({
          name: "Content",
          title: "Content",
          type:"text",
          rows:10   
      }),
    //   defineField({
    //     name: "name",
    //     title: "Content",
    //     type:"array",
    //     of: [{ type: "block" }],   
    // }),
    ],
    preview: {
      select: {
        title: 'title',
        date: 'releaseDate',
        media: 'poster',
        castName0: 'castMembers.0.person.name',
        castName1: 'castMembers.1.person.name',
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