import Card from "@/components/ui/card";
import Link from "@/components/ui/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export type CompanyInfoProps = {
  name: string;
  logo: StaticImageData | string;
  logoAlt?: string;
  address: string[];
  email: string;
  phone: string;
};

export default function CompanyInfo({
  name,
  logo,
  logoAlt = "Company Logo",
  address,
  email,
  phone,
}: CompanyInfoProps) {
  return (
    <Card className="p-3 md:p-6">
      <div className="flex flex-col items-center gap-6 text-base overflow-auto">
        <div className="flex flex-col items-center gap-3">
          <div className="size-24 overflow-hidden rounded-full border">
            <Image
              src={logo}
              alt={logoAlt}
              width={96}
              height={96}
              className="size-full object-cover"
              loading="eager"
            />
          </div>
          <h2 className="text-lg font-bold">{name}</h2>
        </div>
        <div className="grid w-full grid-cols-[auto_1fr] gap-x-6 gap-y-3">
          <div className="text-muted-foreground flex items-start">Address</div>
          <div>
            {address.map((line, i) => (
              <span key={i}>
                {line}
                {i < address.length - 1 && <br />}
              </span>
            ))}
          </div>

          <div className="text-muted-foreground">Email</div>
          <Link href={`mailto:${email}`}>{email}</Link>

          <div className="text-muted-foreground">Phone</div>
          <Link href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</Link>
        </div>
      </div>
    </Card>
  );
}
