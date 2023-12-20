import dynamic from "next/dynamic";

const DrawerCart = dynamic(import("./DrawerCart"), { ssr: false });
export default DrawerCart;
