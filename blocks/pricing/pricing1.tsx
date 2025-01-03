import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

 
export const Pricing1 = () => (
  <div className="w-full py-20 lg:py-40 ">
    <div className="container mx-auto ">
      <div className="flex text-center justify-center items-center gap-4 flex-col ">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Prices that make sense!
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-4 w-full gap-8">
          <Card className="w-full  shadow-xl  rounded-md">
            <CardHeader className="bg-gradient-to-b from-transparent to-black/10 shadow-[inset_0_0_50px_0_#0000001A]">
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Startup
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Sign up today <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full shadow-xl rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Startup
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Sign up today <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full shadow-xl rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Enterprise
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$120</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Book a meeting <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full  shadow-xl rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Premium
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$200</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Contact us <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
