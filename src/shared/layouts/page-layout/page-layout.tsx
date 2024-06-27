import { ReactNode } from "react";

import { Footer } from "@/shared/components/footer/footer";
import { Header } from "@/shared/components/header/header";

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
