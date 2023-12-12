import dynamic from "next/dynamic";

const DrawerSideBar = dynamic(import("./DrawerSideBar"), { ssr: false });
export default DrawerSideBar;
