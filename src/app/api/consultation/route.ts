import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		// TODO: integrate with email/CRM provider
		console.log("Consultation form submission", body);
		return NextResponse.json({ ok: true });
	} catch (e) {
		return NextResponse.json({ ok: false }, { status: 400 });
	}
} 