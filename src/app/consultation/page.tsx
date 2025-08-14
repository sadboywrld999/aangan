"use client";

import { useState } from "react";

export default function ConsultationPage() {
	const [status, setStatus] = useState<null | "idle" | "submitting" | "success" | "error">(null);
	const [message, setMessage] = useState<string>("");

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus("submitting");
		setMessage("");
		const formData = new FormData(event.currentTarget);
		try {
			const res = await fetch("/api/consultation", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(Object.fromEntries(formData.entries())),
			});
			if (!res.ok) throw new Error("Failed to submit");
			setStatus("success");
			setMessage("Thanks! We’ll get back to you shortly.");
			event.currentTarget.reset();
		} catch (e) {
			setStatus("error");
			setMessage("Something went wrong. Please try again.");
		}
	}

	return (
		<main className="container-px mx-auto py-16 sm:py-20 md:py-24">
			<h1 className="h1-display text-3xl sm:text-4xl md:text-5xl text-ink text-center">Book a Consultation</h1>
			<p className="mt-3 text-center text-ink/80 max-w-2xl mx-auto">Share a few details and our team will reach out to schedule your consultation.</p>
			<form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto grid grid-cols-1 gap-5">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					<label className="block">
						<span className="block text-sm font-medium text-ink">Name</span>
						<input required name="name" type="text" className="mt-2 w-full rounded-md border border-sand bg-white px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your full name" />
					</label>
					<label className="block">
						<span className="block text-sm font-medium text-ink">Email</span>
						<input required name="email" type="email" className="mt-2 w-full rounded-md border border-sand bg-white px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent" placeholder="you@example.com" />
					</label>
				</div>
				<label className="block">
					<span className="block text-sm font-medium text-ink">Company Name</span>
					<input name="company" type="text" className="mt-2 w-full rounded-md border border-sand bg-white px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Company or project" />
				</label>
				<label className="block">
					<span className="block text-sm font-medium text-ink">What are you looking for?</span>
					<select name="lookingFor" className="mt-2 w-full rounded-md border border-sand bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-accent">
						<option>Landscape Design & Execution</option>
						<option>Ongoing Maintenance</option>
						<option>Managed Farmlands</option>
						<option>Luxury Villas</option>
						<option>Custom Formulations</option>
						<option>Other</option>
					</select>
				</label>
				<label className="block">
					<span className="block text-sm font-medium text-ink">Anything we should know?</span>
					<textarea name="details" rows={5} className="mt-2 w-full rounded-md border border-sand bg-white px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Share project context, timelines, locations, budgets…" />
				</label>
				<button type="submit" className="btn-primary w-full sm:w-auto">
					{status === "submitting" ? "Submitting…" : "Submit"}
				</button>
				{status && message && (
					<p className={`text-sm ${status === "error" ? "text-red-600" : "text-accent"}`}>{message}</p>
				)}
			</form>
		</main>
	);
} 