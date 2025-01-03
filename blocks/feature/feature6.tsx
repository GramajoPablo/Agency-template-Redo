/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";

export const Feature6 = () => (
  <div className="w-full py-5 lg:py-10">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start  ">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-normal max-w-xl font-bold  text-left">
              Nuestros servicios
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-muted rounded-md p-6 aspect-square flex justify-between flex-col border">
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
<div className="flex justify-center items-center mb-4">
  <img src="/public/darkmode-case2.png" alt="Blog Image" className="rounded-md" />
</div>

          </div>
          <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col border">
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col border">
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col border">
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
