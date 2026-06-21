import type { ReactNode } from "react"
import { Navbar } from "../navigation/Navbar";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
