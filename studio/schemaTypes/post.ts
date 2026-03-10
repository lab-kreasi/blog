// studio/schemaTypes/post.ts
export default {
  name: 'post',
  type: 'document',
  title: 'Postingan Blog',
  fields: [
    { name: 'title', type: 'string', title: 'Judul' },
    { name: 'slug', type: 'slug', title: 'Slug URL', options: { source: 'title' } },
    { name: 'content', type: 'array', title: 'Isi Konten', of: [{ type: 'block' }] }
  ]
}