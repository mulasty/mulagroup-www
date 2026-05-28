import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

export type IconName = keyof typeof Icons;

export function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const IconComponent = Icons[name] as React.ComponentType<LucideProps>;
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
