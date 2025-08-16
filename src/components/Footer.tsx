export function Footer() {
	return (
		<footer className="mt-16 border-t border-sand/50 bg-cream">
			<div className="container-px mx-auto py-8 sm:py-10">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<div>
						<p className="text-ink font-semibold">Get in touch</p>
						<p className="text-ink/80 text-sm mt-1">Email: <a href="mailto:admin@myaangan.in" className="underline hover:no-underline">admin@myaangan.in</a></p>
						<p className="text-ink/80 text-sm">Phone: <a href="tel:+919743057999" className="underline hover:no-underline">9353754012</a></p>
					</div>
					<p className="text-ink/80 text-sm">Based out of Bangalore, India</p>
				</div>
			</div>
		</footer>
	);
} 