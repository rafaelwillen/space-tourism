import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="p-6 tablet:p-0">{children}</div>;
}
