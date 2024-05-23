"use client";
import { BellRing, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { title } from "process";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";

type CardProps = React.ComponentProps<typeof Card>;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ThemeProvider } from "@/components/theme-provider";
import { Heading, Heading2 } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Image } from "@nextui-org/react";
import { CardUsername } from "@/components/ui/UserName";
import { CardHistory } from "@/components/ui/UserHistory";
import { Car } from "lucide-react";
import { EditButton } from "./EditButton";
import { TrackHistory } from "./trackHistory";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      text: "Hi I am Mr.Pclub Seller, how can I help you in User Profile section",
      isUser: false,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    setMessages([...messages, { text: newMessage, isUser: true }]);
    setNewMessage("");
  };
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="  fixed bottom-20 right-20 z-50  ">
        <Popover>
          <PopoverTrigger className="border-none hover:bg" asChild>
            <Button size="icon" className=" rounded-full" variant="outline">
              <Avatar className="h-32 w-32">
                <Image
                  isZoomed
                  src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/Helpbot.png"
                ></Image>
              </Avatar>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="bg-cover bg-slate-100 bg-center w-96 min-h-96"
            // style={{
            //   backgroundImage: `url('https://i.redd.it/qwd83nc4xxf41.jpg')`,
            // }}
          >
            <div
              className="bg-cover bg-center px-2 py-3 rounded-t-lg"
              style={{
                backgroundImage: `url('https://img.freepik.com/premium-vector/robot-chatbot-head-icon-chatbot-assistant-application-sign-ai-technology-background-speech-bubble-message-dialogue-cloud-circuit-board-pattern-pcb-printed-circuit-texture-vector-illustration_127544-2663.jpg')`,
              }}
            >
              <div className="flex space-x-4 justify-left">
                <div>
                  <div className="text-white   text-lg">
                    You are chatting with
                    <div className="flex font-extrabold font-serif text-3xl">
                      Mr. Seller
                    </div>
                  </div>
                </div>
                <div className=" justify-end "></div>
              </div>
            </div>
            <div className="overflow-y-auto max-h-80 px-4 py-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`my-1 ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg  max-w-60 px-6 py-4 ${
                      message.isUser
                        ? "bg-blue-300 mr-auto"
                        : "bg-blue-100 ml-auto"
                    }`}
                  >
                    <p className=" text-l text-black ">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid w-full gap-2">
              <Textarea
                placeholder="Type your message here."
                value={newMessage}
                onChange={handleMessageChange}
              />
              <Button
                className="bg-blue-500 hover:bg-blue-500 rounde text-white"
                onClick={handleSendMessage}
              >
                Send message
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="ml-64 left-0 px-0 pt-10 pb-8 shadow-xl  ring-1 ring-gray-900/5 mx-auto max-w-screen-lg rounded-lg sm:px-10">
        <div className="space-x-24 flex">
          <div>
            <Image
              className=" rounded-full"
              isZoomed
              width={240}
              alt="Pclub IITK"
              src="https://github.com/arnavaj23/photo/blob/main/Arnav.jpeg?raw=true"
            />
          </div>
          <div>
            <CardUsername></CardUsername>
          </div>
        </div>
        <CardHistory></CardHistory>
        <div className="flex py-4 justify-between ">
          <EditButton></EditButton>
          <TrackHistory></TrackHistory>
        </div>
      </div>
    </ThemeProvider>
  );
}
