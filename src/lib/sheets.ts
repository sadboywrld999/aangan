import { google } from "googleapis";

export type ConsultationPayload = {
	name?: string;
	email?: string;
	company?: string;
	phone?: string;
	lookingFor?: string;
	details?: string;
	submittedAt?: string;
};

export async function appendConsultationRow(payload: ConsultationPayload) {
	const {
		GOOGLE_SHEETS_PROJECT_EMAIL,
		GOOGLE_SHEETS_PRIVATE_KEY,
		GOOGLE_SHEETS_SPREADSHEET_ID,
	} = process.env as Record<string, string | undefined>;

	if (!GOOGLE_SHEETS_PROJECT_EMAIL || !GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEETS_SPREADSHEET_ID) {
		throw new Error("Missing Google Sheets environment variables");
	}

	const auth = new google.auth.JWT({
		email: GOOGLE_SHEETS_PROJECT_EMAIL,
		key: (GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});
	const sheets = google.sheets({ version: "v4", auth });

	const row = [
		payload.submittedAt ?? new Date().toISOString(),
		payload.name ?? "",
		payload.email ?? "",
		payload.company ?? "",
		payload.phone ?? "",
		payload.lookingFor ?? "",
		(payload.details ?? "").slice(0, 5000),
	];

	try {
		await sheets.spreadsheets.values.append({
			spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
			range: "A:G", // Use column range instead of specific worksheet
			valueInputOption: "RAW",
			requestBody: { values: [row] },
		});
	} catch (error: any) {
		console.error("Google Sheets error:", error.message);
		throw new Error(`Failed to write to Google Sheets: ${error.message}`);
	}
} 