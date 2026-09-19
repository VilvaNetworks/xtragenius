import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hand Writing - Learning made easy",
};

export default function HandWritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
