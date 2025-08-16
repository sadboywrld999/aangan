import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Case Study | Aangan Landscapes",
	description: "Transforming degraded land into a thriving, self-sustaining ecosystem using 100% organic methods.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
	return <h2 className="h2-title text-ink text-2xl md:text-3xl mt-12 mb-6">{children}</h2>;
}

export default function CaseStudyPage() {
	return (
		<main className="container-px mx-auto py-16 sm:py-20 md:py-24">
			<h1 className="h1-display text-3xl sm:text-4xl md:text-5xl text-ink text-center max-w-4xl mx-auto">Case Study: Transforming Degraded Land into a Thriving, Self-Sustaining Ecosystem</h1>

			{/* Content + Right-side imagery */}
			<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
				{/* Text column - moved more to the right */}
				<section className="lg:col-span-2 lg:ml-8 text-ink/90 leading-relaxed max-w-3xl">
					<SectionHeading>Client Profile</SectionHeading>
					<p className="text-base leading-relaxed">A leading hospitality group approached <em>Aangan</em> to transform a 10-acre patch of neglected farmland into a lush, diverse, and eco-friendly landscape for their upcoming wellness retreat. The land had suffered years of overuse, poor irrigation practices, and chemical-heavy farming, resulting in compacted soil, reduced biodiversity, and low fertility.</p>

					<SectionHeading>Challenges</SectionHeading>
					<ul className="space-y-3 list-disc pl-6 text-base leading-relaxed">
						<li><strong>Soil Degradation</strong> — High salinity levels, low organic matter, and reduced microbial activity.</li>
						<li><strong>Poor Water Retention</strong> — Existing irrigation led to rapid water runoff, increasing soil erosion risk.</li>
						<li><strong>Monoculture History</strong> — Years of single-crop farming depleted essential nutrients and disrupted the natural ecosystem.</li>
						<li><strong>Client Goal</strong> — Achieve a visually stunning, environmentally regenerative space using <em>only</em> 100% organic methods.</li>
					</ul>

					<SectionHeading>Our Approach</SectionHeading>
					<h3 className="mt-6 font-semibold text-ink text-lg">1. On-Ground Surveys & Data Collection</h3>
					<ul className="mt-3 space-y-2 list-disc pl-6 text-base leading-relaxed">
						<li><strong>Soil Profiling</strong> (pH, organic carbon content, nutrient composition)</li>
						<li><strong>Topographical Analysis</strong> to design natural water flow patterns</li>
						<li><strong>Microclimate Mapping</strong> for crop and plantation suitability</li>
					</ul>

					<h3 className="mt-6 font-semibold text-ink text-lg">2. Soil Regeneration Strategy</h3>
					<ul className="mt-3 space-y-2 list-disc pl-6 text-base leading-relaxed">
						<li><strong>Bio-composting</strong> using green manure, farmyard manure, and vermicompost</li>
						<li><strong>Biofertilizers & Mycorrhizal Inoculants</strong> to reintroduce beneficial microbes</li>
						<li><strong>Cover Cropping</strong> with nitrogen-fixing plants like cowpea</li>
					</ul>

					<h3 className="mt-6 font-semibold text-ink text-lg">3. Landscape Design</h3>
					<ul className="mt-3 space-y-2 list-disc pl-6 text-base leading-relaxed">
						<li><strong>Mixed Plantation Layout</strong>: paddy, sugarcane, bamboo clusters, tender coconut groves, rice paddies</li>
						<li><strong>Agroforestry Integration</strong> for shade, windbreaks, biodiversity enhancement</li>
						<li><strong>Aesthetic & Functional Zones</strong> with trails, water bodies, and native buffers</li>
					</ul>

					<h3 className="mt-6 font-semibold text-ink text-lg">4. Organic-Only Implementation</h3>
					<ul className="mt-3 space-y-2 list-disc pl-6 text-base leading-relaxed">
						<li>Neem-based pest management</li>
						<li>Mulching for moisture retention</li>
						<li>Organic foliar sprays for plant immunity</li>
					</ul>

					<h3 className="mt-6 font-semibold text-ink text-lg">5. Continuous Monitoring & Adaptive Management</h3>
					<ul className="mt-3 space-y-2 list-disc pl-6 text-base leading-relaxed">
						<li>Installed soil moisture sensors</li>
						<li>Monthly soil health tracking and biodiversity surveys</li>
						<li>Adaptive planting techniques based on real-time data</li>
					</ul>

					<SectionHeading>Results (After 12 Months)</SectionHeading>
					<ul className="space-y-3 list-disc pl-6 text-base leading-relaxed">
						<li><strong>Soil Organic Matter:</strong> Increased by 42%</li>
						<li><strong>Water Retention:</strong> Improved by 65%, reducing irrigation needs by half</li>
						<li><strong>Biodiversity:</strong> Bird and pollinator species count increased from 6 to 19</li>
						<li><strong>Visual Impact:</strong> The land transformed into a lush, multi-crop landscape with aesthetic harmony and ecological balance</li>
					</ul>

					<SectionHeading>Key Takeaways</SectionHeading>
					<ul className="space-y-3 list-disc pl-6 text-base leading-relaxed">
						<li>A <strong>science-first approach</strong> combined with traditional organic practices can restore even severely degraded lands</li>
						<li><strong>On-ground expertise</strong> and continuous monitoring are crucial for long-term sustainability</li>
						<li>Aangan&apos;s methodology ensures <strong>both beauty and biodiversity</strong>, setting new benchmarks for organic landscaping</li>
					</ul>

					<SectionHeading>Why This Matters</SectionHeading>
					<p className="text-base leading-relaxed">This case study demonstrates <em>Aangan&apos;s</em> ability to merge <strong>deep research, organic methods, and skilled field execution</strong> to create landscapes that are not just visually appealing, but ecologically regenerative.</p>
				</section>

				{/* Right image column - Before first, After second */}
				<aside className="lg:col-span-1 max-w-xl w-full mx-auto">
					<div className="rounded-xl overflow-hidden bg-card shadow-lg">
						<Image src="/CaseStudyBefore.png" alt="Before: degraded land" width={1200} height={900} className="w-full h-auto" />
						<div className="px-4 py-3 text-center text-sm font-semibold text-ink bg-card border-t border-sand/30">BEFORE</div>
					</div>
					<div className="mt-6 rounded-xl overflow-hidden bg-card shadow-lg">
						<Image src="/CaseStudyAfter.png" alt="After: thriving landscape" width={1200} height={900} className="w-full h-auto" />
						<div className="px-4 py-3 text-center text-sm font-semibold text-ink bg-card border-t border-sand/30">AFTER</div>
					</div>
				</aside>
			</div>
		</main>
	);
} 