import { Roboto, Inria_Serif } from "next/font/google";
const inriaSerif = Inria_Serif({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable:"--font-inria-serif",
});
const roboto = Roboto({ subsets: ["latin"],
 weight: ["100", "300", "500"] });
 variable:"--font-roboto"
export {inriaSerif, roboto}








