import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userId = "69ab4ad8433147d6e00924fe";

const questions = [
	{
		type: "text",
		label: "What was your role at the company?",
		placeholder: "Software Engineer",
	},
	{
		type: "number",
		label: "How many years did you work here?",
		placeholder: "2",
	},
	{
		type: "textarea",
		label: "What did you enjoy most about your job?",
		placeholder: "Describe your experience...",
	},
	{
		type: "textarea",
		label: "What challenges did you face?",
		placeholder: "Explain...",
	},
	{ type: "number", label: "Rate work-life balance (1-10)", placeholder: "8" },
	{
		type: "text",
		label: "Who was your direct manager?",
		placeholder: "Manager name",
	},
	{
		type: "textarea",
		label: "What could the company improve?",
		placeholder: "Suggestions...",
	},
	{ type: "number", label: "Rate team collaboration (1-10)", placeholder: "7" },
	{
		type: "text",
		label: "Would you recommend this company?",
		placeholder: "Yes/No",
	},
	{
		type: "textarea",
		label: "Any additional comments?",
		placeholder: "Share anything else...",
	},
];

const answers = {
	text: [
		"Software Engineer",
		"Product Designer",
		"Data Analyst",
		"Engineering Manager",
		"Frontend Developer",
	],
	textarea: [
		"I really enjoyed the collaborative culture and the ability to work on impactful projects.",
		"Sometimes communication between teams could have been better.",
		"The leadership team was supportive and encouraged growth.",
		"More structured onboarding would help new employees.",
		"The team culture was fantastic and very welcoming.",
	],
	number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
};

function random(arr: string[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
	const people = [
		{ name: "Alex Chen", email: "alex@gmail.com" },
		{ name: "Maria Gonzalez", email: "maria@gmail.com" },
		{ name: "Jordan Smith", email: "jordan@gmail.com" },
		{ name: "Priya Patel", email: "priya@gmail.com" },
		{ name: "David Kim", email: "david@gmail.com" },
		{ name: "Emily Carter", email: "emily@gmail.com" },
		{ name: "Ryan Lopez", email: "ryan@gmail.com" },
		{ name: "Sophie Turner", email: "sophie@gmail.com" },
	];

	for (let i = 0; i < people.length; i++) {
		const completed = i < 3;

		await prisma.interview.create({
			data: {
				createdById: userId,
				receiverName: people[i].name,
				receiverEmail: people[i].email,
				isCompleted: completed,
				comments: completed ? "HR reviewed the responses." : null,

				fields: {
					create: questions.map((q) => ({
						...q,
						receiverInput: completed
							? random(answers[q.type as keyof typeof answers])
							: null,
					})),
				},
			},
		});
	}

	console.log("Seeded interviews with answered fields");
}

main()
	.catch(console.error)
	.finally(async () => {
		await prisma.$disconnect();
	});
