import type { StaticImageData } from "next/image";

export interface Company {
  name: string;
  logo: StaticImageData | string;
  logoAlt?: string;
  address: string[];
  email: string;
  phone: string;
}
