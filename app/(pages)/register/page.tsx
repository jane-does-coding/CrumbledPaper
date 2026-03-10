"use client";
import React, { useState } from "react";

const RegisterPage = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const payload = {
			name,
			username,
			email,
			password,
		};

		console.log(payload);
	};

	return (
		<div className="flex bg-neutral-100 w-full h-screen items-center justify-center">
			<img
				src="paper.png"
				className="absolute top-0 left-0 z-0 w-full h-screen opacity-40"
				alt=""
			/>

			<div className="min-w-[32vw] bg-white border-2 border-dotted border-black drop-shadow-md flex flex-col z-10">
				<div className="border-b-2 border-dotted border-black py-[2.5vh] px-[2vw]">
					<h1 className="text-[5vh] leading-[5vh] text-center font-bold">
						Register
					</h1>
				</div>

				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-[2vh] py-[3vh] px-[2vw]"
				>
					<div className="flex gap-[1vw]">
						<div className="flex flex-col gap-[0.5vh]">
							<label className="text-[2.75vh]">Full Name</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.75vh] outline-none"
								placeholder="Jane Smith"
							/>
						</div>

						<div className="flex flex-col gap-[0.5vh]">
							<label className="text-[2.75vh]">Username</label>
							<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								className="border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.75vh] outline-none"
								placeholder="janesmith"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-[0.5vh]">
						<label className="text-[2.75vh]">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.75vh] outline-none"
							placeholder="jane@example.com"
						/>
					</div>

					<div className="flex flex-col gap-[0.5vh]">
						<label className="text-[2.75vh]">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className="border-2 border-dotted border-black px-[1vw] py-[1vh] text-[2.75vh] outline-none"
							placeholder="••••••••"
						/>
					</div>

					<button
						type="submit"
						className="hover:bg-white bg-neutral-900 transition-all ease-in-out duration-300 hover:text-black text-white border-2 border-dotted hover:border-black border-neutral-300 w-[95%] mx-[2.5%] cursor-pointer mt-[1vh] text-[2.75vh] font-extralight py-[1.25vh] disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Create Account
					</button>
				</form>

				<div className="border-t-2 border-dotted border-black py-[2vh] text-center text-[2.2vh]">
					Already have an account?{" "}
					<a
						href="/login"
						className="underline cursor-pointer hover:opacity-70"
					>
						Login
					</a>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
