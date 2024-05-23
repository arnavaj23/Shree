import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { OnSave } from "./Onsave";

export default function Home() {
  return (
    <div className="ml-64 left-0 px-0 pt-10 pb-8 shadow-xl  bg-slate-100 ring-1 ring-gray-900/5 mx-auto max-w-screen-lg rounded-lg sm:px-10">
      <Card className=" w-full">
        <CardHeader>
          <CardTitle className=" text-4xl text-center">
            Edit your personal details
          </CardTitle>
        </CardHeader>
        <CardContent>
          {" "}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Label className=" text-2xl" htmlFor="Name">
              Name
            </Label>
            <Textarea
              className="py-2 text-l"
              placeholder="Type your message here."
              id="Name"
            />
            <Label className=" text-2xl" htmlFor="Name">
              Contact Number
            </Label>
            <Textarea
              className="py-2 text-l"
              placeholder="Type your message here."
              id="Name"
            />
            <Label className=" text-2xl" htmlFor="Name">
              Email ID
            </Label>
            <Textarea
              className="py-2 text-l"
              placeholder="Type your message here."
              id="Name"
            />
            <Label className=" text-2xl" htmlFor="Name">
              Hall of Residence
            </Label>
            <Textarea
              className="py-2 text-l"
              placeholder="Type your message here."
              id="Name"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <OnSave></OnSave>
        </CardFooter>
      </Card>
    </div>
  );
}
