"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { useMemo, useState } from "react";
import { NavLinks } from "./constant";
export const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const RenderNavLink = useMemo(() => {
    return NavLinks?.map((link: any) => {
      return (
        <Link className={styles.navLinks} key={link.url} href={link.url}>
          {link.label}
        </Link>
      );
    });
  }, []);

  const RenderTryInto = useMemo(() => {
    return (
      <Link
        className={`${styles.navLinks} ${styles.navLinkButton}`}
        href="/buy-now"
      >
        Try Inito
      </Link>
    );
  }, []);

  return (
    <>
      <header className="fixed bg-white top-0 left-0 z-[100] w-full">
        <div className={styles.headerMain}>
          <button
            onClick={() => setShowHamburger(!showHamburger)}
            className={styles.hamburgerMenu}
          >
            <Image
              src={showHamburger ? "/icon-close.svg" : "/icon-hamburger.svg"}
              alt="hamburger"
              width={30}
              height={24}
            />
          </button>
          <div className="flex items-center justify-between w-[80%] lg:w-auto">
            <Link href="/">
              {/* //todo change logo based on screen size */}
              <Image src="/main-logo.svg" alt="logo" width={105} height={40} />
            </Link>
            <div className="flex lg:hidden ml-5">{RenderTryInto}</div>
          </div>

          <nav className="hidden lg:flex">
            {RenderNavLink} {RenderTryInto}
          </nav>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${showHamburger && styles.show}`}>
        {RenderNavLink}
      </div>
    </>
  );
};
