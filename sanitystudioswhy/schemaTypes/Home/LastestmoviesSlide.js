import {defineField, defineType} from 'sanity'
// import { MdMovieEdit as icon } from "react-icons/md";
export default defineType({
    name:"moviesslider",
    title:"Movie Slider",
    type:"document",
    
    fields:[
        defineField({
            name:"image",
            title:"Slider Image",
            type:"image",
            options: {hotspot: true},

}),defineField({
    name:"moviename",
    title:"Movie Name",
    type:"string",
}),
defineField({
    name:"moviegenre",
    title:"Movie Genre",
    type:"text",
    rows:3
    
})

]
})