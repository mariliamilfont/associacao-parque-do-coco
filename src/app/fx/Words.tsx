import { Fragment, type CSSProperties } from "react";
import { efeitos } from "../efeitos";

export default function Words({ text }: { text: string }) {
	if (!efeitos.heroEntrada) return <>{text}</>;

	return (
		<>
			{text.split(" ").map((word, i) => (
				<Fragment key={i}>
					{i > 0 && " "}
					<span className="fx-word" style={{ "--i": i } as CSSProperties}>
						{word}
					</span>
				</Fragment>
			))}
		</>
	);
}
