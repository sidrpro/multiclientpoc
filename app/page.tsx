import { headers } from "next/headers";
import { getClientBySubdomain, getDefaultClient } from "@/lib/clients";
import LandingPage from "@/components/LandingPage";

export default async function Home() {
  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "";
  
  const clientConfig = subdomain 
    ? getClientBySubdomain(subdomain) || getDefaultClient()
    : getDefaultClient();
  
  return <LandingPage config={clientConfig} />;
}
