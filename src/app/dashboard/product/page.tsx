"use client";

import { useEffect } from "react";
import { TITLE_TECHCELL } from "@constants/data";
import { Product } from "@components/Form";
import { NoSSRWrapper } from "@components/Shared";

export default function Page() {
  useEffect(() => {
    document.title = `Sản Phẩm - ${TITLE_TECHCELL}`;
  }, [document.title]);

  return (
    <NoSSRWrapper>
      <Product />
    </NoSSRWrapper>
  );
}
