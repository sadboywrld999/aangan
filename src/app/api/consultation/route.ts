import { NextResponse } from "next/server";
import { appendConsultationRow } from "@/lib/sheets";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const payload = {
			name: body.name,
			email: body.email,
			company: body.company,
			phone: body.phone,
			lookingFor: body.lookingFor,
			details: body.details,
			submittedAt: new Date().toISOString(),
		};

		const hasEnv = !!(
			process.env.GOOGLE_SHEETS_PROJECT_EMAIL &&
			process.env.GOOGLE_SHEETS_PRIVATE_KEY &&
			process.env.GOOGLE_SHEETS_SPREADSHEET_ID
		);

		console.log("Form submission received:", payload);
		console.log("Environment check:", { hasEnv, email: !!process.env.GOOGLE_SHEETS_PROJECT_EMAIL, key: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY, sheetId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID });

		if (hasEnv) {
			await appendConsultationRow(payload);
			console.log("Successfully appended to Google Sheets");
		} else {
			console.log("No Google Sheets env vars, logging to console only");
		}

		return NextResponse.json({ ok: true });
	} catch (e: any) {
		console.error("API Error:", e);
		return NextResponse.json({ ok: false, error: e?.message ?? "Unknown error" }, { status: 400 });
	}
} 