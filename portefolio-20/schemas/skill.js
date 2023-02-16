import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      desription: 'Progrès de 0 à 100%',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    }),
  ],
})
