import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}
