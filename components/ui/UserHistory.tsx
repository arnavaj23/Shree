import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
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

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardHistory({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", (className = " w-full"))} {...props}>
      <CardHeader className="text-center font-semibold">
        <CardTitle className="text-3xl font-bold text-gray-800">
          Personal Details
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <div className="grid w-full gap-1.5">
              <Label
                className="tracking-tight font-semibold text-2xl text-gray-800"
                htmlFor="message"
              >
                Contact Number
              </Label>
              <div className="border border-slate-200 rounded-lg px-4 py-2 text-xl text-gray-700 font-semibold">
                7499856419
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <div className="grid w-full gap-1.5">
              <Label
                className="tracking-tight font-semibold text-2xl text-gray-800"
                htmlFor="message"
              >
                Roll Number
              </Label>
              <div className="border border-slate-200 rounded-lg px-4 py-2 text-xl text-gray-700 font-semibold">
                230491
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <div className="grid w-full gap-1.5">
              <Label
                className="tracking-tight font-semibold text-2xl text-gray-800"
                htmlFor="message"
              >
                Email
              </Label>
              <div className="border border-slate-200 rounded-lg px-4 py-2 text-xl text-gray-700 font-semibold">
                arnavaj23@example.com
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <div className="grid w-full gap-1.5">
              <Label
                className="tracking-tight font-semibold text-2xl text-gray-800"
                htmlFor="message"
              >
                Hall of Residence
              </Label>
              <div className="border border-slate-200 rounded-lg px-4 py-2 text-xl text-gray-700 font-semibold">
                Hall 13
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <div className="grid w-full gap-1.5">
              <Label
                className="tracking-tight font-semibold text-2xl text-gray-800"
                htmlFor="message"
              >
                Items Buyed
              </Label>
              <div className="border border-slate-200 rounded-lg px-4 py-2 text-xl text-gray-700 font-semibold">
                3
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <div className="grid w-full gap-1.5">
              <Label
                className="tracking-tight font-semibold text-2xl text-gray-800"
                htmlFor="message"
              >
                Items Sold
              </Label>
              <div className="border border-slate-200 rounded-lg px-4 py-2 text-xl text-gray-700 font-semibold">
                2
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center"></CardFooter>
    </Card>
  );
}
