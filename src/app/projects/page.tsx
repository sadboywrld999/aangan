import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
	const projects = [
		{
			title: "Managed Farmlands",
			desc: "From crop selection to year-round harvests across large-scale farmsand estates.",
			cta: { label: "View Case Study", href: "/case-study" },
			image: "/ProjectViewManagedFarmlands.png",
		},
		{
			title: "Gated Communities",
			desc: "Year after year, we ensure vibrant, well-maintained landscapes in your community.",
			cta: { label: "Request Consultation", href: "/consultation" },
			image: "/ProjectViewGatedCommunities.png",
		},
		{
			title: "Self-Owned Farmlands",
			desc: "For individuals and families looking to maintain and thrive on their own farmlands.",
			cta: { label: "View Case Study", href: "/case-study" },
			image: "/ProjectViewFarm.png",
		},
		{
			title: "Luxury Villas",
			desc: "For high-end residences that require lush and exotic greenery.",
			cta: { label: "Request Consultation", href: "/consultation" },
			image: "/ProjectViewLuxuryVillas.png",
		},
	];

	return (
		<main className="container-px mx-auto py-16 sm:py-20 md:py-24">
			<h1 className="h1-display text-3xl sm:text-4xl md:text-5xl text-ink text-center">Projects We Undertake</h1>
			<div className="mt-12 grid grid-cols-1 gap-10">
				{projects.map((p, idx) => (
					<div key={p.title} className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
						<div className={`${idx % 2 === 1 ? "md:order-2" : ""}`}>
							{p.image ? (
								<Image src={p.image} alt={p.title} width={640} height={480} className="w-full h-auto rounded-xl shadow-sm" />
							) : (
								<div className="aspect-[4/3] w-full rounded-xl bg-card" />
							)}
						</div>
						<div className="space-y-4">
							<h2 className="h2-title text-2xl sm:text-3xl text-ink">{p.title}</h2>
							<p className="text-base text-ink/80 max-w-prose">{p.desc}</p>
							<Link href={p.cta.href} className="btn-primary">{p.cta.label}</Link>
						</div>
					</div>
				))}
			</div>
		</main>
	);
} 