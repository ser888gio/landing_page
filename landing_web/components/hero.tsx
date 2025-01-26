import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-foreground text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Innovative IT Solutions for Your Business</h1>
        <p className="text-xl mb-8">
          Empowering your digital transformation with cutting-edge technology and expert support.
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </div>
    </section>
  )
}

