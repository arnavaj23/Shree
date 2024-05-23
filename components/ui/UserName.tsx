import { BellRing, Check, Link } from "lucide-react";

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
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ButtonAsChild } from "./buttonaschild";

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

export function CardUsername({ className, ...props }: CardProps) {
  return (
    <Card className={cn(" w-[380px]", (className = "w-full "))} {...props}>
      <CardHeader>
        <CardTitle>Arnav Jagtap</CardTitle>
        <CardDescription className=" text-lg">Hall 13</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription>
          Hello , this is Arnav Jagtap from Hall 13 ,IITK . I am First year
          B.tech student from Electrical Department
        </CardDescription>
        <ButtonAsChild></ButtonAsChild>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
