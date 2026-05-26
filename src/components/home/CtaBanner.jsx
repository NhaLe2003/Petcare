import Button from '../ui/Button'

export default function CtaBanner() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-accent px-8 py-16 text-center text-white shadow-2xl sm:px-16">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Pamper Your Pet?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Book your appointment today and give your companion the premium care they deserve.
            </p>
            <Button to="/booking" variant="white" size="lg" className="mt-8">
              Book Appointment Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
