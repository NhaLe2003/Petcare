import { useParams } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import Button from '../components/ui/Button'
import ResponsiveImage from '../components/ui/ResponsiveImage'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="section-padding text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Button to="/blog" variant="primary" className="mt-6">
          Back to Blog
        </Button>
      </section>
    )
  }

  return (
    <article>
      <div className="relative">
        <ResponsiveImage
          src={post.image}
          alt={post.title}
          aspect="auto"
          fallbackType="pet"
          containerClassName="h-64 w-full sm:h-80 lg:h-96"
          width={1200}
          height={500}
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-10">
          <div className="mx-auto max-w-3xl">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
            <p className="mt-2 text-white/80">
              {post.date} · {post.readTime}
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="mx-auto max-w-3xl">
          <p className="text-xl text-slate-600 leading-relaxed">{post.excerpt}</p>
          <div className="prose prose-slate mt-8 max-w-none">
            <p className="text-slate-700 leading-relaxed text-lg">{post.content}</p>
            <p className="mt-6 text-slate-700 leading-relaxed text-lg">
              Remember, every pet is unique. When in doubt, consult your veterinarian for
              personalized advice. At PetCare Booking, we&apos;re always here to help keep your
              companions looking and feeling their best.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button to="/blog" variant="outline">
              ← Back to Blog
            </Button>
            <Button to="/booking" variant="accent">
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
