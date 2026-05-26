import { useState } from 'react'
import PageHero from '../components/layout/PageHero'
import { imagePresets } from '../data/images'
import BlogCard from '../components/cards/BlogCard'
import { blogPosts } from '../data/blog'

const categories = ['All', ...new Set(blogPosts.map((p) => p.category))]

export default function Blog() {
  const [category, setCategory] = useState('All')

  const filtered =
    category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category)

  return (
    <>
      <PageHero
        badge="Pet Care Tips"
        title="Blog & Resources"
        subtitle="Expert advice on grooming, health, nutrition, and keeping your pets happy year-round."
        image={imagePresets.pageHero.blog()}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
