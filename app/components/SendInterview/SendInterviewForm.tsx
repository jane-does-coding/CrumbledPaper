"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	LuBinary,
	LuLetterText,
	LuPenLine,
	LuPlus,
	LuSquareCheck,
	LuSquareMousePointer,
	LuTrash2,
} from "react-icons/lu";

type FieldType =
	| "text"
	| "number"
	| "select"
	| "textarea"
	| "checkbox"
	| "radio";

interface Field {
	id: number;
	type: FieldType;
	label: string;
	placeholder: string;
	options?: string[];
}

const SendInterviewForm = () => {
	const [fields, setFields] = useState<Field[]>([]);
	const [receiverName, setReceiverName] = useState("");
	const [receiverEmail, setReceiverEmail] = useState("");
	const [comments, setComments] = useState("");

	const handleAddField = (type: FieldType) => {
		const defaultLabels: Record<FieldType, string> = {
			text: "Text Field Label",
			number: "Number Field Label",
			select: "Select Field Label",
			textarea: "Textarea Field Label",
			checkbox: "Checkbox Field Label",
			radio: "Radio Field Label",
		};

		setFields([
			...fields,
			{
				id: Date.now(),
				type,
				label: defaultLabels[type],
				placeholder: "",
				options:
					type === "select" || type === "radio" ? ["Option 1"] : undefined,
			},
		]);
	};

	const handleAddOption = (fieldId: number) => {
		setFields(
			fields.map((f) => {
				if (f.id === fieldId) {
					const options = f.options || [];
					return {
						...f,
						options: [...options, `Option ${options.length + 1}`],
					};
				}
				return f;
			})
		);
	};

	const handleOptionChange = (fieldId: number, idx: number, value: string) => {
		setFields(
			fields.map((f) => {
				if (f.id === fieldId && f.options) {
					const newOptions = [...f.options];
					newOptions[idx] = value;
					return { ...f, options: newOptions };
				}
				return f;
			})
		);
	};

	const handleDeleteField = (id: number) => {
		setFields(fields.filter((field) => field.id !== id));
	};

	const handleLabelChange = (id: number, newLabel: string) => {
		setFields(fields.map((f) => (f.id === id ? { ...f, label: newLabel } : f)));
	};

	const handlePlaceholderChange = (id: number, newValue: string) => {
		setFields(
			fields.map((f) => (f.id === id ? { ...f, placeholder: newValue } : f))
		);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = {
			receiverName,
			receiverEmail,
			comments,
			fields,
		};

		try {
			const res = await fetch("/api/interviews", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!res.ok) throw new Error("Failed to create interview");

			const data = await res.json();
			console.log("Interview created", data);

			setFields([]);
			setReceiverName("");
			setReceiverEmail("");
			setComments("");
		} catch (error) {
			console.error(error);
		}
	};

	const renderField = (field: Field) => {
		return (
			<motion.div
				key={field.id}
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.9 }}
				transition={{ duration: 0.25, ease: "easeOut" }}
				className="my-[1vh] relative bg-green-500/0 gap-[1vw] py-[1.25vh] flex w-[95%] mx-auto"
			>
				<div className="w-full">
					<input
						value={field.label}
						onChange={(e) => handleLabelChange(field.id, e.target.value)}
						className="bg-transparent border-none outline-none text-[2.5vh] w-full"
					/>

					{field.type === "text" && (
						<input
							type="text"
							value={field.placeholder}
							placeholder="Field Placeholder"
							onChange={(e) =>
								handlePlaceholderChange(field.id, e.target.value)
							}
							className="border-black border-2 border-dotted text-[2.5vh] px-[1vw] py-[1vh] w-full focus:outline-none"
						/>
					)}
					{field.type === "number" && (
						<input
							type="number"
							value={field.placeholder}
							placeholder="1"
							onChange={(e) =>
								handlePlaceholderChange(field.id, e.target.value)
							}
							className="border-black border-2 border-dotted text-[2.5vh] px-[1vw] py-[1vh] w-full focus:outline-none"
						/>
					)}
					{field.type === "textarea" && (
						<textarea
							value={field.placeholder}
							onChange={(e) =>
								handlePlaceholderChange(field.id, e.target.value)
							}
							placeholder="Field Placeholder"
							className="border-black border-2 border-dotted text-[2.5vh] px-[1vw] py-[1vh] w-full focus:outline-none"
						/>
					)}
					{field.type === "checkbox" && (
						<input
							type="checkbox"
							checked={field.placeholder === "checked"}
							onChange={(e) =>
								handlePlaceholderChange(
									field.id,
									e.target.checked ? "checked" : ""
								)
							}
						/>
					)}

					{/* Select field */}
					{field.type === "select" && (
						<div className="flex flex-col gap-[0.5vh]">
							<select
								value={field.placeholder}
								onChange={(e) =>
									handlePlaceholderChange(field.id, e.target.value)
								}
								className="border-black border-2 border-dotted text-[2.5vh] px-[1vw] py-[1vh] w-full focus:outline-none"
							>
								{field.options?.map((opt, i) => (
									<option key={i} value={opt}>
										{opt}
									</option>
								))}
							</select>
							{field.options?.map((opt, i) => (
								<input
									key={i}
									value={opt}
									onChange={(e) =>
										handleOptionChange(field.id, i, e.target.value)
									}
									className="border-black border-2 border-dotted text-[2.5vh] px-[1vw] py-[1vh] w-full focus:outline-none"
								/>
							))}
							<button
								type="button"
								onClick={() => handleAddOption(field.id)}
								className="text-orange-600 steiner font-extrabold tracking-[1px] mt-[0.5vh]"
							>
								+ Add Option
							</button>
						</div>
					)}

					{/* Radio field */}
					{field.type === "radio" && (
						<div className="flex flex-col gap-[0.5vh]">
							{field.options?.map((opt, i) => (
								<label key={i}>
									<input type="radio" name={`radio-${field.id}`} value={opt} />{" "}
									{opt}
								</label>
							))}
							{field.options?.map((opt, i) => (
								<input
									key={i + 1000}
									value={opt}
									onChange={(e) =>
										handleOptionChange(field.id, i, e.target.value)
									}
									className="border-black border-2 border-dotted text-[2.5vh] px-[1vw] py-[1vh] w-full focus:outline-none"
								/>
							))}
							<button
								type="button"
								onClick={() => handleAddOption(field.id)}
								className="text-orange-600 steiner font-extrabold tracking-[1px] mt-[0.5vh]"
							>
								+ Add Option
							</button>
						</div>
					)}
				</div>

				<motion.button
					type="button"
					onClick={() => handleDeleteField(field.id)}
					className="flex items-center justify-center border-2 group border-black border-dotted px-[1vw] cursor-pointer text-red-500 hover:text-red-700 text-[2vh]"
				>
					<LuTrash2 className="text-[2.5vh] transition-all ease-in-out group-hover:scale-125" />
				</motion.button>
			</motion.div>
		);
	};

	const renderPreviewField = (field: Field) => {
		return (
			<motion.div
				layout
				key={field.id}
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.25 }}
				className="flex flex-col mt-[2vh]"
			>
				<h3 className="text-[3vh] mb-[1vh]">{field.label}</h3>

				{field.type === "text" && (
					<input
						type="text"
						placeholder={field.placeholder || "Your answer"}
						className="w-full border-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
					/>
				)}

				{field.type === "number" && (
					<input
						type="number"
						placeholder={field.placeholder || "0"}
						className="w-full border-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
					/>
				)}

				{field.type === "textarea" && (
					<textarea
						placeholder={field.placeholder || "Your answer"}
						className="w-full border-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
					/>
				)}

				{field.type === "checkbox" && (
					<label className="flex items-center gap-[1vw] text-[2.5vh]">
						<input type="checkbox" />
						Check this option
					</label>
				)}

				{field.type === "select" && (
					<select className="w-full border-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none">
						{field.options?.map((opt, i) => (
							<option key={i}>{opt}</option>
						))}
					</select>
				)}

				{field.type === "radio" && (
					<div className="flex flex-col gap-[0.5vh]">
						{field.options?.map((opt, i) => (
							<label key={i} className="text-[2.5vh] flex gap-[1vw]">
								<input type="radio" name={`preview-${field.id}`} />
								{opt}
							</label>
						))}
					</div>
				)}
			</motion.div>
		);
	};

	return (
		<div className="flex flex-col w-full items-center justify-center gap-[2vh]">
			<div className="w-[95%] mx-auto bg-white border-2 border-dotted py-[2vh] px-[2vw] drop-shadow-md">
				<h1 className="text-[5.5vh] leading-[5.5vh] text-center">
					Interview Form
				</h1>
			</div>

			<div className="flex gap-[2vh] w-[95%]">
				<div className="w-full mx-auto bg-white border-2 border-dotted py-[3vh] px-0 drop-shadow-md">
					<form onSubmit={handleSubmit} className="w-full">
						{/* MY ADDITION */}
						<h1 className="text-[3.5vh] leading-[3.5vh] text-center mb-[3vh]">
							Interview
						</h1>

						{/* Default Questions */}
						<div className="flex flex-col">
							<input
								type="text"
								value={receiverName}
								onChange={(e) => setReceiverName(e.target.value)}
								placeholder="Receiver Name"
								className="w-full border-t-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
							/>
							<input
								type="text"
								value={receiverEmail}
								onChange={(e) => setReceiverEmail(e.target.value)}
								placeholder="Receiver Email"
								className="w-full border-t-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none"
							/>
							<textarea
								value={comments}
								onChange={(e) => setComments(e.target.value)}
								placeholder="Additional Comments (Optional)"
								className="w-full border-y-2 border-dotted border-black px-[1vw] py-[0.75vh] text-[3vh] outline-none h-[6.5vh]"
							/>
						</div>
						{/* Custom Questions */}
						<h1 className="text-[3.5vh] leading-[3.5vh] text-center mb-[3vh] mt-[4vh]">
							Input Fields
						</h1>

						{/* Animated dynamic fields */}
						<AnimatePresence>
							{fields.map((field) => renderField(field))}
						</AnimatePresence>

						<h2 className="text-[2.5vh] font-light mb-[2vh] mt-[3vh] pt-[3vh] border-t-2 border-dotted border-black text-start flex items-center justify-center gap-[1vw]">
							Add Input <LuPlus className="text-[2.5vh] inline" />
						</h2>
						<div className="grid grid-cols-3 gap-x-[0.5vw] gap-y-[1vh] px-[1vw]">
							{[
								{ type: "text", label: "Text", icon: <LuPenLine /> },
								{ type: "number", label: "Number", icon: <LuBinary /> },
								/* {
									type: "select",
									label: "Select",
									icon: <LuSquareMousePointer />,
								}, */
								{ type: "textarea", label: "Textarea", icon: <LuLetterText /> },
								/* {
									type: "checkbox",
									label: "Checkbox",
									icon: <LuSquareCheck />,
								}, */
								/* {
									type: "radio",
									label: "Radio",
									icon: <LuSquareMousePointer />,
								}, */
							].map((btn) => (
								<motion.button
									key={btn.type}
									whileTap={{ scale: 0.95 }}
									whileHover={{ scale: 1.0 }}
									type="button"
									onClick={() => handleAddField(btn.type as FieldType)}
									className="bg-neutral-200 text-black border-black border-2 border-dotted text-[3vh] cursor-pointer"
								>
									{btn.label}
								</motion.button>
							))}
						</div>

						<button
							type="submit"
							className="hover:bg-white bg-neutral-900 transition-all ease-in-out duration-300 hover:text-black text-white border-2 border-dotted hover:border-black border-neutral-300 w-[95%] mx-[2.5%] cursor-pointer mt-[3vh] text-[2.75vh] font-extralight py-[1.25vh]"
						>
							Complete
						</button>
					</form>
				</div>
				<div className="w-full mx-auto bg-white border-2 border-dotted py-[3vh] px-[2vw] drop-shadow-md transition-all ease-in-out">
					<h1 className="text-[3.5vh] leading-[3.5vh] text-center mb-[2vh]">
						Preview
					</h1>
					<p className="text-[3vh] transition-all ease-in-out">
						Dear, {receiverName ? receiverName : "[RECIEVER NAME]"}, thank you
						so much for your time at our company, so please fill out this form
						on your experience and feedback.
					</p>

					<p className="text-[3vh] mt-[2vh]">{comments ? comments : ""}</p>

					<AnimatePresence>
						<motion.div layout className="flex flex-col">
							{fields.map((field) => renderPreviewField(field))}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default SendInterviewForm;
