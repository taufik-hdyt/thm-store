import dynamic from "next/dynamic";

const ModalProduct = dynamic(import("./ModalProduct"), { ssr: false });
export default ModalProduct;
