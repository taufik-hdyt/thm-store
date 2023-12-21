import dynamic from "next/dynamic";

const WichlistItem = dynamic(import("./Wichlist"), { ssr: false });
export default WichlistItem;
