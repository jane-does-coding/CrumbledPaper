import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

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
