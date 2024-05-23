"use client";
import React from "react";
import { BellRing, Check } from "lucide-react";
import { Image } from "@nextui-org/react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { ThemeProvider } from "@/components/theme-provider";

type CardProps = React.ComponentProps<typeof Card>;

export default function Home({ className, ...props }: CardProps) {
  const list = [
    {
      title: "Havells cooler",
      img: "https://m.media-amazon.com/images/I/610RkvgNY0L._SL1500_.jpg",
      clr: " text-red-500",
      price: "SOLD ",
      link: "/Coolers/SPTCooler",
      sold: "Person 1",
      chat: "Coolers/SPTCooler/Chat",
      des: "You can beat the summer heat with the Hindware Snowcrest XENO 45 L Room Air Cooler. It generates clean, fresh, and odour-free air with its efficient cooling pads.",
    },
    {
      title: "Spinehal Matresses",
      img: "https://m.media-amazon.com/images/I/718hZIQwZ+L._SL1500_.jpg",
      clr: "text-green-500",
      price: "BUYED ",
      link: "/Coolers/Hawells",
      sold: "Person 2",
      chat: "Coolers/Hawells/Chat",
      des: "SPINEHEAL MATTRESS Box Type Soft Cotton Filled Bed Mattress, Firm Gadda for Floor, Bed, Travelling, Multipurpose, Light Weight, King Size Mattress (72X48, Double Size)",
    },
    {
      title: "Bajaj Table Fan",
      img: "https://m.media-amazon.com/images/I/71qt9+Der5L._SL1500_.jpg",
      clr: "text-green-500",
      price: "BUYED ",
      link: "Coolers/TableFan",
      sold: "Person 3",
      chat: "",
      des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
    },
  ];

  const [messages, setMessages] = useState([
    {
      text: "Hi I am Mr.Pclub Seller, how can I help you in Cart",
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
      <div className=" flex justify-center  ">
        <h1 className=" py-5 flex tracking-tighter font-extrabold text-6xl">
          <Avatar className="px-2 w-20 h-14">
            <AvatarImage src="https://cdn-icons-png.flaticon.com/512/8865/8865579.png" />
            <AvatarFallback>Cart</AvatarFallback>
          </Avatar>
          CART
        </h1>
      </div>

      <div className="border-b-4 border-black"></div>

      <div className=" py-4 trac fixed bottom-20 right-20 z-50  ">
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
      <div className="grid my-8 gap-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {list.map((item, index) => (
          <Card className={cn("w-full", className)} {...props}>
            <Link href={item.link || "/"}>
              {" "}
              <CardHeader>
                <CardTitle className="  font-bold text-3xl md:text-2xl lg:text-3xl">
                  {item.title}
                </CardTitle>

                <CardTitle
                  className={cn(" font-bold md:text-xl lg:text-xl", item.clr)}
                >
                  {item.price}
                </CardTitle>

                <CardDescription className="md:text-sm lg:text-xs">
                  {item.price} by {item.sold}
                </CardDescription>

                <div className="border-b-4  border-slate-400"></div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Image
                  isZoomed
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[280px]"
                  src={item.img}
                />

                <CardHeader className="text-center md:text-sm lg:text-xs">
                  {item.des}
                </CardHeader>

                <div className="border-b-4 border-slate-400"></div>
              </CardContent>
            </Link>

            <CardFooter className=" mb-0 flex justify-center">
              <Link href={item.chat || "/"}>
                <Button className=" bg-blue-500 full">
                  <Check className="mr-2 h-4 w-4" /> CHAT NOW
                </Button>
              </Link>
            </CardFooter>

            <div className="border-b-4 border-black"></div>
          </Card>
        ))}
      </div>
    </ThemeProvider>
  );
}
