import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="IT professionals working"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">About TechSolutions</h2>
          <p className="text-lg mb-4">
            With over a decade of experience, TechSolutions has been at the forefront of providing innovative IT
            services and solutions to businesses of all sizes.
          </p>
          <p className="text-lg mb-4">
            Our team of expert professionals is dedicated to delivering cutting-edge technology solutions that drive
            growth, efficiency, and security for our clients.
          </p>
          <p className="text-lg">
            We pride ourselves on our commitment to excellence, customer satisfaction, and staying ahead of the rapidly
            evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

