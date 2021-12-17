import { Toy } from "types";

declare module '*.svg' {
	const content: string
	export default content
}

declare module "data.json" {
  const value: Toy;
  export default value;
}
