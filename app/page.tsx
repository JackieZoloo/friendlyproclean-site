"use client";
import { useState } from "react"
export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  return (
    <main className="bg-slate-50 text-slate-900 overflow-x-hidden">

      {/* TOP NAV */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 md:px-6 py-4">

          <h1 className="text-xl font-semibold tracking-wide">
            FriendlyProClean
          </h1>

          <div className="flex items-center gap-4 text-sm mt-2 md:mt-0">
            
            <a href="#services" className="hidden md:block hover:text-blue-300">
              Services
            </a>

            <a href="#commercial" className="hidden md:block hover:text-blue-300">
              Commercial
            </a>

            <a href="#contact" className="hidden md:block hover:text-blue-300">
              Contact
            </a>

            <a
              href="tel:8557302470"
              aria-label="Call FriendlyProClean"
              className="bg-blue-700 px-3 py-2 rounded-md hover:bg-blue-800 font-medium text-sm whitespace-nowrap"
            >
              Call / Text
            </a>

          </div>
        </div>
      </header>


      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Professional Cleaning Services
            <br />
            Serving Los Angeles County
          </h2>

          <p className="text-lg text-slate-300 mb-8">
            Structured, reliable cleaning solutions for commercial
            properties and modern residences throughout the LA area.
          </p>
          <p className="text-sm text-slate-400 mb-10">
            Trusted by homes and businesses across Los Angeles County
          </p>
          <a
            href="#contact"
            className="bg-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-blue-800"
          >
            Request a Walkthrough
          </a>
        </div>
      </section>


      {/* COMMERCIAL PRIORITY */}
      <section id="commercial" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-3xl font-semibold mb-4">
            Commercial Cleaning Solutions
          </h3>

          <p className="text-slate-600 max-w-2xl mx-auto">
            We partner with offices, retail locations, medical spaces,
            and property managers to deliver consistent and professional
            cleaning services tailored to operational needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
            <p className="text-slate-600">
              Daytime or after-hours service to minimize disruption.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Custom Cleaning Plans</h4>
            <p className="text-slate-600">
              Structured proposals based on walkthrough assessments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Reliable Communication</h4>
            <p className="text-slate-600">
              Clear scheduling, consistent service, accountable results.
            </p>
          </div>
        </div>
      </section>


      {/* PROFESSIONAL IMAGE SECTION */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Professional Standards. Modern Approach.
            </h3>
            <p className="text-slate-600 mb-4">
              FriendlyProClean focuses on structured processes,
              operational efficiency, and consistent results.
            </p>
            <p className="text-slate-600">
              Our goal is to build long-term partnerships across
              Los Angeles County by delivering dependable,
              high-quality service.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/office-cleaning.jpg"
              alt="Professional commercial cleaning service in Los Angeles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-12">
            Additional Services
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-semibold mb-2">Residential Cleaning</h4>
              <p className="text-slate-600">
                Recurring and deep cleaning for homes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Carpet & Upholstery</h4>
              <p className="text-slate-600">
                Professional stain removal and fabric care.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Move-In / Move-Out</h4>
              <p className="text-slate-600">
                Detailed cleaning for property transitions.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* MODERN APPROACH SECTION */}
<section className="py-20 px-6 bg-slate-100">
  <div className="max-w-5xl mx-auto text-center">
    <h3 className="text-3xl font-semibold mb-6">
      Modernizing Professional Cleaning
    </h3>

      <p className="text-slate-600 max-w-3xl mx-auto mb-8">
    FriendlyProClean applies structured systems and modern operational tools
    to improve scheduling efficiency, communication, and service consistency.
    Our approach is designed to support long-term commercial partnerships
    throughout Los Angeles County.
  </p>

    <div className="grid md:grid-cols-3 gap-10 text-center">
      <div>
        <h4 className="font-semibold mb-2">Structured Scheduling</h4>
        <p className="text-slate-600">
          Organized service plans designed around operational needs.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Digital Communication</h4>
        <p className="text-slate-600">
          Clear updates and streamlined coordination.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Quality Control Systems</h4>
        <p className="text-slate-600">
          Consistent standards for dependable results.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT FORM */}
<section id="contact" className="py-16 px-6 bg-slate-900 text-white">
  <div className="max-w-3xl mx-auto text-center mb-10">
    <h3 className="text-3xl font-semibold mb-4">
      Request a Walkthrough
    </h3>
    <p className="text-slate-400">
      Tell us about your property and we’ll schedule an assessment.
    </p>
  </div>

  <div className="max-w-3xl mx-auto bg-slate-100 text-slate-900 p-8 rounded-lg shadow-lg">
   <form
  onSubmit={async (e) => {
  e.preventDefault()

  const form = e.currentTarget
  const formData = new FormData(form)

  const data = {
    company: formData.get("company"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  }

  try {
    setStatus("loading")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setStatus("success")
      form.reset()
    } else {
      setStatus("error")
    }
  } catch {
    setStatus("error")
  }
}}
className="grid md:grid-cols-2 gap-6"
>
  {/* Company (Optional) */}
  <input
    type="text"
    name="company"
    placeholder="Company Name (Commercial Clients)"
    className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
  />

  {/* Contact Name */}
  <input
    type="text"
    name="name"
    autoComplete="name"
    placeholder="Full Name"
    className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    required
  />

  {/* Email */}
  <input
    type="email"
    name="email"
    autoComplete="email"
    placeholder="Email"
    className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    required
  />

  {/* Phone */}
  <input
    type="tel"
    name="phone"
    autoComplete="tel"
    placeholder="Phone"
    className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    required
  />

  {/* Message */}
  <textarea
    name="message"
    placeholder="Brief description of property (size, type, frequency)"
    rows={4}
    className="p-3 border rounded-md md:col-span-2"
    required
  />

  {/* Submit Button */}
  <button
  type="submit"
  disabled={status === "loading"}
  className="bg-blue-700 text-white py-3.5 rounded-md font-semibold hover:bg-blue-800 disabled:opacity-50 md:col-span-2"
>
  {status === "loading" ? "Submitting..." : "Submit Request"}
</button>
{status === "success" && (
  <p className="text-green-600 text-sm mt-2 md:col-span-2">
    Request submitted successfully. We’ll contact you shortly.
  </p>
)}

{status === "error" && (
  <p className="text-red-600 text-sm mt-2 md:col-span-2">
    Something went wrong. Please try again.
  </p>
)}
</form>
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-slate-800 text-slate-400 py-8 text-center text-sm">
        © {new Date().getFullYear()} FriendlyProClean — Serving Los Angeles County  
        <br />
        Call / Text: 855-730-2470
      </footer>

    </main>
  );
}