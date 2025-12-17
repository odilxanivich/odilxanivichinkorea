import Link from 'next/link'
export default function ArticleCard({post}){
  return (
    <article className="border rounded p-4 bg-white hover:shadow">
      <h3 className="text-lg font-semibold"><Link href={`/blog/${post.slug}`}><a>{post.title}</a></Link></h3>
      <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
      <div className="text-xs text-gray-400 mt-3">{post.date}</div>
    </article>
  )
}
