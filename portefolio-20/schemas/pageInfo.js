import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string',
    }),
    defineField({
      name: 'profilPic',
      title: 'ProfilPic',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile',
      type: 'string',
    }),
    defineField({
      name: 'adresse',
      title: 'Adresse',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
  ],
})
