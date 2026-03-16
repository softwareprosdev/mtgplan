import type { Metadata } from "next";

const DEFAULT_OG_IMAGE = "https://mtgplan.com/og-default.png";

export function createMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `https://mtgplan.com${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage }],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}
