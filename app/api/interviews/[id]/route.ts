import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const body = await req.json();
		const { id } = params;

		const updatedInterview = await prisma.interview.update({
			where: { id },
			data: {
				isCompleted: true,
				fields: {
					update: Object.entries(body).map(([fieldId, receiverInput]) => ({
						where: { id: fieldId },
						data: { receiverInput: receiverInput as string },
					})),
				},
			},
			include: { fields: true },
		});

		return NextResponse.json(updatedInterview);
	} catch (error) {
		console.error(error);
		return new NextResponse("Error updating interview", { status: 500 });
	}
}

export async function DELETE(req: Request) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const { searchParams } = new URL(req.url);
		const interviewId = searchParams.get("id");
		if (!interviewId) {
			return NextResponse.json(
				{ error: "Interview ID required" },
				{ status: 400 }
			);
		}

		const interview = await prisma.interview.findUnique({
			where: { id: interviewId },
		});
		if (!interview)
			return NextResponse.json({ error: "Not found" }, { status: 404 });
		if (interview.createdById !== currentUser.id) {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		await prisma.$transaction([
			prisma.field.deleteMany({ where: { interviewId } }),
			prisma.interview.delete({ where: { id: interviewId } }),
		]);

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error("Interview deletion failed:", err);
		return NextResponse.json(
			{ error: "Failed to delete interview" },
			{ status: 500 }
		);
	}
}
