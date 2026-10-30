"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

export default function PixCopyButton({ pixKey }: { pixKey: string }) {
	const [message, setMessage] = useState("");

	async function copyPixKey() {
		if (!pixKey.trim() || /^\[.*\]$/.test(pixKey.trim())) {
			setMessage("A chave PIX ainda não foi informada.");
			return;
		}

		try {
			await navigator.clipboard.writeText(pixKey);
			setMessage("Chave PIX copiada.");
		} catch {
			setMessage("Não foi possível copiar a chave PIX neste dispositivo.");
		}
	}

	return (
		<>
			<button
				type="button"
				onClick={copyPixKey}
				className="mt-4 flex min-h-10 w-full items-center justify-center rounded-lg bg-[#65ad70] px-4 text-xs font-bold text-white transition-colors hover:bg-[#4d995a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#286d8b]"
			>
				<Copy aria-hidden="true" className="mr-2" size={15} />
				Copiar chave PIX
			</button>
			<p aria-live="polite" className="mt-2 min-h-4 text-center text-[10px] text-[#52758a]">
				{message}
			</p>
		</>
	);
}
