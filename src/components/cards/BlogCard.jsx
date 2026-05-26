import Button from '../ui/Button'
import ResponsiveImage from '../ui/ResponsiveImage'

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-md card-hover">
      <div className="relative">
        <ResponsiveImage
          src={post.image}
          alt={post.title}
          aspect="video"
          fallbackType="pet"
          className="transition-transform duration-500 group-hover:scale-110"
          width={800}
          height={500}
        />
        <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-sm text-slate-500">
          {post.date} · {post.readTime}
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900 line-clamp-2">{post.title}</h3>
        <p className="mt-3 text-slate-600 line-clamp-2">{post.excerpt}</p>
        <Button to={`/blog/${post.slug}`} variant="ghost" size="sm" className="mt-4 px-0">
          Read More →
        </Button>
      </div>
    </article>
  )
}
