"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
	return (
		<header className="absolute top-0 left-0 right-0 z-20">
			<div className="container-px mx-auto">
				<div className="flex items-center justify-between py-5">
					<Link href="/" aria-label="Aangan Home" className="inline-flex items-center gap-2">
						<Image
							src="/AanganLogo.png"
							alt="Aangan"
							width={1200}
							height={400}
							priority
							className="w-auto h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24"
						/>
					</Link>
					<nav className="hidden sm:flex items-center gap-4">
						<Link href="/projects" className="text-white/90 hover:text-white text-sm font-medium">Projects</Link>
						<Link href="/consultation" className="btn-primary">Book a Consultation</Link>
					</nav>
				</div>
			</div>
		</header>
	);
} 