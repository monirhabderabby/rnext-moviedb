"use client";
import Image from "next/image";

const ClientImage = async (props) => {
  //   const { base64 } = await getPlaiceholder(buffer);
  return <Image {...props} />;
};

export default ClientImage;
