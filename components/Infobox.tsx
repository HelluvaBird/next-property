import Link from 'next/link';

type InfoboxPropType = {
  title: string;
  description: string;
  backgroundColor?: string;
  buttonInfo: {
    text: string;
    href: string;
    backgroundColor?: string;
  };
};

export default function Infobox({
  title,
  description,
  backgroundColor = 'bg-gray-100',
  buttonInfo,
}: InfoboxPropType) {
  return (
    <div
      className={`${backgroundColor} text-black text-base p-8 rounded-lg grid grid-rows-[auto_1fr_auto] gap-4`}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p>{description}</p>
      <div>
        <Link
          href={buttonInfo.href}
          className={`${
            buttonInfo.backgroundColor ?? 'bg-black'
          } inline-block px-5 py-3 text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2`}
        >
          {buttonInfo.text}
        </Link>
      </div>
    </div>
  );
}
