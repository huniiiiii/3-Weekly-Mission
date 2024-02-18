"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Profile from "@/components/Profile";
import "@/components/Header/Header.css";

function Header() {
  const router = useRouter();
  const [isFolderPage, setIsFolderPage] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsFolderPage(router.pathname === "/folder");
    }
  }, [router.isReady, router.pathname]);

  const headerClass = isFolderPage ? "folder-page-header" : "default-header";

  return (
    <header className={headerClass}>
      <div className="header-logo">
        <Link href="/">
          <img src="/images/logo.png" alt="로고" />
        </Link>
      </div>
      <div className="header-content">
        <Profile />
      </div>
    </header>
  );
}

export default Header;
