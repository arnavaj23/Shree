import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

type CardProps = React.ComponentProps<typeof Card>;

export function CardHistory({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", (className = " w-full"))} {...props}>
      <CardHeader className="text-center font-semibold">
        <CardTitle>YOUR DETAILS</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="grid w-full gap-1.5">
            <Label className="text-xl" htmlFor="message">
              Contact Number
            </Label>
            <Textarea
              className=" font-semibold"
              placeholder="7499856419"
              id="message"
            />
          </div>
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="grid w-full gap-1.5">
            <Label className="text-xl" htmlFor="message">
              Hall Of Residence
            </Label>
            <Textarea
              className=" font-semibold"
              placeholder="Hall 13"
              id="message"
            />
          </div>
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="grid w-full gap-1.5">
            <Label className="text-xl" htmlFor="message">
              E-Mail
            </Label>
            <Textarea
              className=" font-semibold"
              placeholder="arnavaj23@iitk.ac.in"
              id="message"
            />
          </div>
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          {" "}
          <div className="grid w-full gap-1.5">
            <Label className="text-xl" htmlFor="message">
              Hall of Residence
            </Label>
            <Textarea
              className=" font-semibold"
              placeholder="Hall 13"
              id="message"
            />
          </div>
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          {" "}
          <div className="grid w-full gap-1.5">
            <Label className="text-xl" htmlFor="message">
              Items Buyed
            </Label>
            <Textarea className=" font-semibold" placeholder="3" id="message" />
          </div>
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          {" "}
          <div className="grid w-full gap-1.5">
            <Label className="text-xl" htmlFor="message">
              Items Sold
            </Label>
            <Textarea className=" font-semibold" placeholder="4" id="message" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-blue-500">SAVE</Button>
      </CardFooter>
    </Card>
  );
}
