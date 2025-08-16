import Link from "next/link";
import Image from "next/image";

function ServiceIcon({ name }: { name: string }) {
	const common = "w-10 h-10 stroke-forest";
	switch (name) {
		case "Plant Care Products":
			return (
				<svg viewBox="0 0 24 24" fill="none" className={common}>
					<path d="M7 13c3 0 5-2.5 5-5-2.5 0-5 2-5 5Zm0 0v6h7" strokeWidth="1.5"/>
					<path d="M12 8c0-3 2.5-5 5-5 0 2.5-2 5-5 5Z" strokeWidth="1.5"/>
				</svg>
			);
		case "Landscape Design & Execution":
			return (
				<svg viewBox="0 0 24 24" fill="none" className={common}>
					<rect x="3" y="14" width="14" height="6" rx="1.5" strokeWidth="1.5"/>
					<path d="M17 10h3a1 1 0 0 1 1 1v9" strokeWidth="1.5"/>
					<path d="M7 10h6v4H7z" strokeWidth="1.5"/>
				</svg>
			);
		case "Custom Formulations":
			return (
				<svg viewBox="0 0 24 24" fill="none" className={common}>
					<path d="M9 3v6l-4 7a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 16l-4-7V3" strokeWidth="1.5"/>
					<path d="M9 9h6" strokeWidth="1.5"/>
				</svg>
			);
		case "Ongoing Maintenance":
			return (
				<svg viewBox="0 0 24 24" fill="none" className={common}>
					<path d="M10 7 7 10l7 7 3-3" strokeWidth="1.5"/>
					<path d="M14 7a3 3 0 1 1 3 3" strokeWidth="1.5"/>
				</svg>
			);
		default:
			return null;
	}
}

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero */}
			<section className="relative isolate">
				<div className="absolute inset-0 -z-10">
					{/* Hero background image - upload your header image as HeaderBg.png in the public folder */}
					<div className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-full bg-[url('/HeaderBg.png')] bg-cover bg-center" />
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

			{/* Services cards (no Trusted By section) */}
			<section className="container-px mx-auto py-14 sm:py-16 md:py-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{[
						{
							title: "Plant Care Products",
							desc: "Organic amendments, bio-stimulants, mixes",
						},
						{
							title: "Landscape Design & Execution",
							desc: "End-to-end project delivery",
						},
						{ title: "Custom Formulations", desc: "Project specific, sustainability blends" },
						{ title: "Ongoing Maintenance", desc: "Seasonal upkeep for peak health" },
					].map((card) => (
						<div key={card.title} className="rounded-xl bg-card/80 border border-sand/70 p-6 text-center">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sand/50">
								<ServiceIcon name={card.title} />
							</div>
							<h3 className="font-semibold text-lg text-ink leading-tight">{card.title}</h3>
							<p className="mt-2 text-xs text-muted leading-relaxed">{card.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Before & After + About Aangan Section */}
			<section className="container-px mx-auto py-14 sm:py-16 md:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Before & After Image */}
					<div className="relative">
						<Image
							src="/BeforeAfterHomepage.png"
							alt="Before and After landscape transformation"
							width={600}
							height={400}
							className="w-full h-auto rounded-lg shadow-lg"
						/>
					</div>

					{/* About Aangan Text */}
					<div className="space-y-6">
						<h2 className="h2-title text-3xl sm:text-4xl text-ink">About Aangan</h2>
						<p className="text-lg text-ink/80 leading-relaxed">
							With years of experience in plant care and sustainable landscape development, Aangan is dedicated to transforming spaces into vibrant, healthy environments that thrive.
						</p>
					</div>
				</div>
			</section>

			{/* Compact Case Study Card */}
			<section className="container-px mx-auto pb-8">
				<div className="rounded-2xl bg-card/70 border border-sand/60 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
					<div className="md:col-span-2">
						<h3 className="h2-title text-ink text-2xl">Proving It In The Field</h3>
						<p className="mt-2 text-ink/80 text-sm sm:text-base max-w-prose">See how we transformed a neglected 10-acre farmland into a thriving, self-sustaining ecosystem using 100% organic methods.</p>
						<div className="mt-4">
							<Link href="/case-study" className="btn-primary">Read the Case Study</Link>
						</div>
					</div>
					<div className="md:col-span-1">
						<Image src="/CaseStudyAfter.png" alt="Case study preview" width={480} height={320} className="w-full h-auto rounded-xl" />
					</div>
				</div>
			</section>
		</main>
	);
}
