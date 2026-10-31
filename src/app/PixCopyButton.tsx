"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { efeitos } from "./efeitos";

export default function PixCopyButton({ pixKey }: { pixKey: string }) {
	const [message, setMessage] = useState("");
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!copied) return;
		const id = setTimeout(() => setCopied(false), 2200);
		return () => clearTimeout(id);
	}, [copied]);

	async function copyPixKey() {
		if (!pixKey.trim() || /^\[.*\]$/.test(pixKey.trim())) {
			setMessage("A chave PIX ainda não foi informada.");
			return;
		}

		try {
			await navigator.clipboard.writeText(pixKey);
			setMessage("Chave PIX copiada.");
			setCopied(true);
		} catch {
			setMessage("Não foi possível copiar a chave PIX neste dispositivo.");
		}
	}

	return (
		<>
			<button
				type="button"
				onClick={copyPixKey}
				className="mt-4 flex min-h-10 w-full items-center justify-center rounded-lg bg-[#65ad70] px-4 text-sm font-bold text-white transition-colors hover:bg-[#4d995a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#286d8b]"
			>
				{efeitos.pixCheck && copied ? (
					<Check aria-hidden="true" className="fx-pop mr-2" size={15} />
				) : (
					<Copy aria-hidden="true" className="mr-2" size={15} />
				)}
				{efeitos.pixCheck && copied ? "Chave copiada" : "Copiar chave PIX"}
			</button>
			<p aria-live="polite" className="mt-2 min-h-4 text-center text-[0.75rem] text-[#52758a]">
				{message}
			</p>
		</>
	);
}
