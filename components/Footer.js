import { PrismicLink } from "@prismicio/react";

/**
 * Links and credit to be used at the bottom of every page.
 */
export const Footer = () => {
  return (
    <footer className="grid justify-items-center gap-4 border-t border-neutral-200 pt-8">
      <p className="text-center italic text-neutral-400">
        @2022 por{" "}
        <PrismicLink
          href="https://avalondevops.com.br"
          target="_blank"
          className="pl-1 font-bold text-neutral-700"
        >
          AvalonDevops
        </PrismicLink>
      </p>
      <PrismicLink href="https://avalondevops.com.br" target="_blank">
        <img src="/avalon-logo.svg" alt="Avalon logo" className="w-24" />
      </PrismicLink>
    </footer>
  );
};
