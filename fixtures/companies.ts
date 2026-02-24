import type { Company } from "@/types/company";
import goldSpaLogo from "@/assets/logo.png";

export const goldSpa: Company = {
  name: "Gold Spa",
  logo: goldSpaLogo,
  logoAlt: "Company Logo",
  address: ["2525 Camino del Rio S", "Suite 315 Room 8", "San Diego, CA 92108"],
  email: "goldspa@gmail.com",
  phone: "+11 123 4567 222",
};

export const defaultCompany = goldSpa;
