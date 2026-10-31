import { efeitos } from "../efeitos";

export default function Blobs() {
	if (!efeitos.fundoOrganico) return null;

	return (
		<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
			<span className="fx-blob fx-blob-a" />
			<span className="fx-blob fx-blob-b" />
		</div>
	);
}
