import Card from "@/components/ui/card";
import Link from "@/components/ui/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function CompanyInfo() {
  return (
    <Card>
      <div className="flex flex-col items-center gap-6 text-base">
        <div className="flex flex-col items-center gap-3">
          <div className="size-24 overflow-hidden rounded-full border">
            <Image
              src={logo}
              alt="Company Logo"
              width={96}
              height={96}
              className="size-full object-cover"
              loading="eager"
            />
          </div>
          <h2 className="text-lg font-bold">Gold Spa</h2>
        </div>
        <div className="grid w-full grid-cols-[auto_1fr] gap-x-6 gap-y-3">
          <div className="text-muted-foreground flex items-start">Address</div>
          <div className="whitespace-pre-line">
            2525 Camino del Rio S
            <br />
            Suite 315 Room 8
            <br />
            San Diego, CA 92108
          </div>

          <div className="text-muted-foreground">Email</div>
          <Link href="mailto:goldspa@gmail.com">goldspa@gmail.com</Link>

          <div className="text-muted-foreground">Phone</div>
          <Link href="tel:+111234567222">+11 123 4567 222</Link>
        </div>
      </div>
    </Card>
  );
}
