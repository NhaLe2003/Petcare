import PageHero from '../components/layout/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import ResponsiveImage from '../components/ui/ResponsiveImage'
import { teamMembers, coreValues } from '../data/team'
import { imagePresets } from '../data/images'
import { valueIcons } from '../components/ui/Icons'
import { IconCheck } from '../components/ui/Icons'
import Button from '../components/ui/Button'

const commitments = [
  'Hospital-grade sanitization between every appointment',
  'Separate zones for dogs and cats to reduce stress',
  'All tools sterilized and groomers wear fresh gloves',
  'Temperature-controlled, well-ventilated facilities',
  'Fear Free handling techniques for anxious pets',
  'Full incident reporting and transparent communication',
]

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Caring for Pets Like Family"
        subtitle="Since 2018, PetCare Booking has been the trusted destination for premium grooming and wellness."
        image={imagePresets.pageHero.about()}
        imageAlt="Pet bathing and grooming at PetCare Booking"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                badge="Our Story"
                title="Built on Love for Animals"
                subtitle="What started as a small neighborhood groomer has grown into a full-service pet care destination — without losing our personal touch."
                center={false}
              />
              <p className="text-slate-600 leading-relaxed">
                At PetCare Booking, we believe every pet deserves individualized attention. Our team
                of certified groomers, veterinarians, and caretakers work together to deliver
                exceptional experiences — from the moment you book online to the happy walk home.
              </p>
            </div>
            <ResponsiveImage
              src={imagePresets.about.team()}
              alt="Professional groomer with happy dog"
              aspect="card"
              fallbackType="pet"
              containerClassName="rounded-3xl shadow-xl"
              className="rounded-3xl"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To make professional pet care accessible, stress-free, and delightful for every pet
                and their family through exceptional service and genuine compassion.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold text-accent">Our Vision</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To become the most trusted pet care brand — setting the standard for hygiene,
                expertise, and customer experience in communities everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader badge="Core Values" title="What We Stand For" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = valueIcons[value.icon]
              return (
                <div
                  key={value.title}
                  className="rounded-3xl bg-warm p-6 text-center shadow-sm card-hover"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader badge="Our Team" title="Meet the Experts" subtitle="Passionate professionals dedicated to your pet's wellbeing." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="overflow-hidden rounded-3xl bg-cream shadow-md card-hover">
                <ResponsiveImage
                  src={member.image}
                  alt={member.name}
                  aspect="portrait"
                  fallbackType="team"
                  width={400}
                  height={500}
                />
                <div className="p-5">
                  <h3 className="font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-beige to-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                badge="Safety & Hygiene"
                title="Your Pet's Health Comes First"
                center={false}
              />
              <ul className="space-y-3">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <IconCheck className="w-4 h-4" />
                    </span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ResponsiveImage
              src={imagePresets.about.facility()}
              alt="Clean modern pet care facility"
              aspect="card"
              fallbackType="pet"
              containerClassName="rounded-3xl shadow-xl"
              className="rounded-3xl"
              width={800}
              height={600}
            />
          </div>
          <div className="mt-12 text-center">
            <Button to="/booking" variant="accent" size="lg">
              Book Your Visit
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
