'use client';
import { CldImage } from 'next-cloudinary';

export default function PropertyCardImage({ src }: { src: string }) {
  return (
    <CldImage
      fill
      src={src}
      sizes="33vw"
      alt=""
      className="w-auto object-cover rounded-lg"
    />
  );
}
