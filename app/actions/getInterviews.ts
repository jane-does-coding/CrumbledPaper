import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getInterviews() {
	const currentUser = await getCurrentUser();
	if (!currentUser) return;

	try {
		const interviews = await prisma.interview.findMany({
			where: {
				createdById: currentUser.id as string,
			},
			include: {
				fields: true,
			},
		});

		if (!interviews) {
			return null;
		}

		return interviews;
	} catch (err: any) {
		return null;
	}
}
