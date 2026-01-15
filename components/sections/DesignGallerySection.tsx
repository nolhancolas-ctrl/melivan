//components/sections/DesignGallerySection.tsx
import fs from "fs";
import path from "path";
import DesignSectionClient, { DesignImage } from "./DesignGalleryClient";

function getDesignImages(): DesignImage[] {
  // 👉 on pointe maintenant vers /public/design
  const dir = path.join(process.cwd(), "public", "design");

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp|gif|avif)$/i.test(file))
    .sort();

  return files.map((file) => {
    const baseName = file.replace(/\.[^/.]+$/, "");
    const pretty = baseName
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const label = pretty
      ? pretty.charAt(0).toUpperCase() + pretty.slice(1)
      : "Design visual";

    return {
      // 👉 chemin mis à jour vers /design
      src: `/design/${file}`,
      alt: label,
    };
  });
}

export default function DesignSection() {
  const images = getDesignImages();
  return <DesignSectionClient images={images} />;
}