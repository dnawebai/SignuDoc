"use client";

import Link from "next/link";

import { useBranding } from "@/components/layout/branding-provider";
import { IQUASH_NAME, SIGNUDOC_NAME } from "@/lib/branding";
import { cn } from "@/lib/cn";

// iQuash's official identity (public/brand/iquash-official-20261112), on its
// own navy tile, for light backgrounds. The white pearl cut-out
// (public/brand/iquash-cutout-20261113) has no tile and is for dark ones.
const OFFICIAL_MARK = "/brand/iquash-official-20261112";
const CUTOUT_MARK = "/brand/iquash-cutout-20261113";

type BrandProps = {
  className?: string;
  compact?: boolean;
  href?: string;
  labelClassName?: string;
};

export function Brand({
  className = "",
  compact = false,
  href = "/",
  labelClassName = "",
}: BrandProps) {
  const { logoUrl, productName } = useBranding();

  // An install's own logo stands in for the mark and the name. The link
  // still carries the name, for people who cannot see the picture.
  if (logoUrl) {
    return (
      <Link
        aria-label={productName}
        className={cn("inline-flex min-w-0 items-center", className)}
        href={href}
      >
        <BrandLogo compact={compact} src={logoUrl} />
      </Link>
    );
  }

  return (
    <Link
      aria-label={productName}
      className={cn(
        "inline-flex min-w-0 items-center gap-2.5 text-(--fg)",
        className,
      )}
      href={href}
    >
      <BrandMark />
      {!compact ? (
        <span
          className={cn(
            "max-w-[52vw] truncate text-[1.125rem] font-extrabold tracking-[-0.02em] sm:max-w-[22rem] sm:text-[1.1875rem]",
            labelClassName,
          )}
        >
          {productName === SIGNUDOC_NAME ? (
            // The iQuash wordmark, then the product: "iQuash Sign".
            <>
              {IQUASH_NAME}{" "}
              <span className="font-medium text-(--secondary)">Sign</span>
            </>
          ) : (
            productName
          )}
        </span>
      ) : null}
    </Link>
  );
}

/** The install's own logo, kept to the height of the header. */
export function BrandLogo({
  className = "",
  compact = false,
  src,
}: {
  className?: string;
  compact?: boolean;
  src: string;
}) {
  return (
    // Served by this site at an address that changes with the image:
    // next/image would only add a second copy to keep in step.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      className={cn(
        "block h-8 w-auto object-contain object-left",
        compact ? "max-w-10" : "max-w-[44vw] sm:max-w-44",
        className,
      )}
      decoding="async"
      src={src}
    />
  );
}

/**
 * The iQuash mark. Decorative: the link next to it carries the name.
 * `inverse` is the white cut-out, for dark backgrounds.
 */
export function BrandMark({
  className = "",
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  const inverse = tone === "inverse";

  return (
    // A small static file from public/: next/image would only add a resize
    // step for an image that is already the right size.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      aria-hidden="true"
      className={cn("block size-8 shrink-0 object-contain", className)}
      decoding="async"
      draggable={false}
      height={32}
      src={
        inverse
          ? `${CUTOUT_MARK}/identity-128.webp`
          : `${OFFICIAL_MARK}/icon-48.png`
      }
      srcSet={
        inverse
          ? `${CUTOUT_MARK}/identity-128.webp 1x, ${CUTOUT_MARK}/identity-320.webp 3x`
          : `${OFFICIAL_MARK}/icon-48.png 1x, ${OFFICIAL_MARK}/icon-96.png 2x, ${OFFICIAL_MARK}/icon-192.png 4x`
      }
      width={32}
    />
  );
}
