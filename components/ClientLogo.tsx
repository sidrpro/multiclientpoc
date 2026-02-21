import Image from "next/image";
import { ClientConfig } from "@/lib/clients";

interface ClientLogoProps {
  config: ClientConfig;
  className?: string;
}

export default function ClientLogo({ config, className = "" }: ClientLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={config.logo}
        alt={`${config.name} Logo`}
        width={200}
        height={60}
        priority
        className="object-contain"
      />
    </div>
  );
}
