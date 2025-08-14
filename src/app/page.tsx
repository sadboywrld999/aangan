import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero */}
			<section className="relative isolate">
				<div className="absolute inset-0 -z-10">
					{/* Placeholder background. We'll swap with provided assets later. */}
					<div className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-full bg-[url('/hero-placeholder.jpg')] bg-cover bg-center" />
					<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10" />
				</div>

				<div className="container-px mx-auto">
					<div className="max-w-3xl py-24 sm:py-28 md:py-36">
						<h1 className="h1-display text-4xl sm:text-5xl md:text-6xl text-white">
							Sustainable Landscaping for Modern Developments
						</h1>
						<p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/90">
							From premium plant care to end-to-end landscape execution — trusted by leading developers and
							estates.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row gap-3">
							<Link href="/consultation" className="btn-primary">Book a Consultation</Link>
							<Link href="/projects" className="btn-secondary bg-white/90">View Projects</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Trust + Services placeholder sections to be filled with assets later */}
			<section className="container-px mx-auto py-14 sm:py-16 md:py-20">
				<h2 className="h2-title text-ink text-2xl sm:text-3xl md:text-4xl text-center">Trusted By</h2>
				<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 opacity-80">
					<div className="h-10 bg-card rounded" />
					<div className="h-10 bg-card rounded" />
					<div className="h-10 bg-card rounded" />
					<div className="h-10 bg-card rounded hidden md:block" />
					<div className="h-10 bg-card rounded hidden md:block" />
				</div>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{["Plant Care Products","Landscape Design & Execution","Custom Formulations","Ongoing Maintenance"].map((title) => (
						<div key={title} className="rounded-xl bg-card p-6">
							<div className="h-10 w-10 bg-sand rounded mb-4" />
							<h3 className="font-semibold text-lg text-ink">{title}</h3>
							<p className="mt-2 text-sm text-muted">Copy to be finalized with assets.</p>
						</div>
					))}
				</div>

				<div className="mt-10 flex justify-center">
					<Link href="/projects" className="btn-secondary">See Full Case Study</Link>
				</div>
			</section>
		</main>
	);
}
