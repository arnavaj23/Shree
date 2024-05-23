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

import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";

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

import { ButtonAsChild } from "./ButtonAsChild";
import { CartButton } from "./Cart";

export default function Home() {
  const list = [
    {
      title: "image1",
      img: "https://m.media-amazon.com/images/I/718hZIQwZ+L._SL1500_.jpg",
      price: "Rs 4900/-",
      link: "Coolers/SPTCooler",
    },
    {
      title: "image2",
      img: "https://m.media-amazon.com/images/I/715-a5b+6JL._SL1500_.jpg",
      price: "$3.00",
      link: "Coolers/Hawells",
    },
    {
      title: "image3",
      img: "https://m.media-amazon.com/images/I/71Q3w2wWWHL._SL1500_.jpg",
      price: "$10.00",
      link: "/Kindia",
    },
  ];

  const [messages, setMessages] = useState([
    {
      text: "Hi I am Mr.Pclub Seller, how can I help you in Matresses section",
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
    <div className="flex">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {" "}
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
        <div className="flex-col absolute top-16 left-10  px-10 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <Carousel className="w-full ">
            <CarouselContent>
              {list.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span>
                          <Image src={item.img}></Image>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex space-x-14">
            <ButtonAsChild></ButtonAsChild>
            <CartButton></CartButton>
            <Button className="bg-blue-500 hover:bg-blue-800">
              VIEW SELLER
            </Button>
          </div>

          <div className="border-b-2 border-black h-6"></div>
          <p className="p-4"></p>

          <div className="text-2xl flex space-x-10 font-semibold">
            <Avatar>
              <AvatarImage src="data:image/jpeg;base64,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" />
              <AvatarFallback>GameDev</AvatarFallback>
            </Avatar>
            COMMENTS
          </div>
          <div className="border-b-4 border-black h-6"></div>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
              <Avatar>
                <AvatarImage src="https://github.com/pclubiitk/pclub-website/blob/main/images/pclublogo.png?raw=true" />
                <AvatarFallback>Pclub</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">PClub</p>
                <p className="text-gray-500 text-sm">3 hours ago</p>
              </div>
            </div>
            <p className="text-gray-800">
              It's completely waste of money if anyone selecting this item .
              Pump stop working in 1 day of delivery . I purchase this item with
              customer rating and brand orient has but as it is internal defect
              I'm returning . Please don't select this item
            </p>
          </div>

          <div className="border-b-4 border-black h-6"></div>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXMGMVgp4LIUPRji0cVPAWMNK4RnO0qwbggkmuGXT0A&s" />
                <AvatarFallback>FAC</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">FAC</p>
                <p className="text-gray-500 text-sm">3 hours ago</p>
              </div>
            </div>
            <p className="text-gray-800">
              While not the epitome of comfort, this mattress tends to lose its
              cushioning effect within a week of use. The stuffing inside also
              tends to lose its functionality. However, it serves well for
              temporary use.
            </p>
          </div>

          <div className="border-b-4 border-black h-6"></div>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFRuK1D0psN31mEJEe225aWPrIz2QxgAcvVWqOimR7g&s" />
                <AvatarFallback>GameDev</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">GameDev</p>
                <p className="text-gray-500 text-sm">3 hours ago</p>
              </div>
            </div>
            <p className="text-gray-800">
              Don't purchase this item. 3inches saize coming and bad quality. So
              west product.west of money. and not respond customers not
              replacement and refunds.
            </p>
          </div>
        </div>
        <div className=" absolute max- right-10 top-20">
          <div className=" px-10 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto  sm:rounded-lg sm:px-10">
            <div className="mx-auto grid w-full max-w-6xl gap-2">
              <header className="font-bold text-3xl font-serif text-center">
                SPINEHEAL MATTRESS Box Type Soft Cotton Filled Bed <br></br>
                Mattress, Firm Gadda for Floor, Bed, Travelling, Multipurpose,
                <br></br>
                Light Weight, King Size Mattress (72X48, Double Size)
              </header>
              {/* <p className="p-2"></p> */}
              <div className="border-b-4 border-black h-6"></div>
              <div className="border-b border-black"></div>
              <header className="text-2xl font-extrabold text-green-600 text-center">
                Rs - 1000 /-
              </header>
              <div className="p-3">
                <div className="border-b border-black"></div>
                <div className="flex">
                  <div className="p-4 w-1/2">
                    <div className="list-outside">
                      <div>
                        <li>
                          <div className="flex space-x-4">
                            <div className="font-extrabold">User for: </div>
                            <div> 1 Year</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex space-x-4">
                            <div className="font-extrabold">Controls type </div>
                            <div> Automatic</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex space-x-4">
                            <div className="font-extrabold">
                              Original Price:{" "}
                            </div>
                            <div> Rs 1000/-</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex space-x-4">
                            <div className="font-extrabold">Brand : </div>
                            <div> Havells</div>
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-4  border-black"></div>
            <div className="p-3">
              <div className="text-xl font-mono font-semibold">DESCRIPTION</div>
              <br></br>
              <div className="list">
                <li>
                  Ultimate cooling with Aerofan technology: The unique Aerofan
                  technology of the desert <br></br>air cooler offers superior
                  air delivery of 3650 m3/ hour. The blades make sure that there
                  is low<br></br> operating noise.{" "}
                </li>
                <br></br>
                <li>
                  Long air throw of 59 feet: This air cooler for rooms, halls
                  and restaurants comes with a long air<br></br> throw of 59
                  feet to keep you cool and comfortable.{" "}
                </li>
                <br></br>
                <li>
                  {" "}
                  Cord winder for tidier storage: The air cooler comes with a
                  cord winder that makes for a tidier storage <br></br>when the
                  cooler is not in use.{" "}
                </li>
                <br></br>
                <li>
                  Fully collapsible louvres: Louvres of the air cooler are 100%
                  collapsible. Shut the louvres down and <br></br>keep the dust
                  and insects from entering it when the cooler is not in use.
                </li>
                <br></br>
                <li>
                  Compatible with inverter: For areas that face frequent power
                  outages, this inverter compatible air cooler<br></br> is the
                  perfect solution for Indian summers, for it gives you
                  consistent cooling even during power cuts.{" "}
                </li>
                <br></br>
                <li>
                  12-month warranty for absolute peace of mind: The air cooler
                  comes protected against manufacturing <br></br>defects with a
                  12-month warranty. For any product related assistance, dial
                  18001037574.
                </li>
              </div>
            </div>
            <p className="p-2"></p>
            <div className="border-b-4  border-black" />
            <p className="p-5"></p>
            <div className="text-2xl flex font-extrabold">
              <Avatar>
                <AvatarImage src="data:image/jpeg;base64,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" />
                <AvatarFallback>GameDev</AvatarFallback>
              </Avatar>
              Seller Information
            </div>
            <p className="p-5"></p>
            <div className="text-xl space-x-4">
              <div className="list-outside">
                <div>
                  <li>
                    <div className="flex space-x-7">
                      <div className=" font-extrabold">NAME </div>
                      <div> H. R Kadim</div>
                    </div>
                  </li>
                  <li>
                    <div className="flex space-x-7">
                      <div className="font-extrabold">OWNER HALL</div>
                      <div> 1</div>
                    </div>
                  </li>
                  <li>
                    <div className="flex space-x-7">
                      <div className="font-extrabold"> PROGRAMME</div>
                      <div> B.Tech (4th Year)</div>
                    </div>
                  </li>
                  <li>
                    <div className="flex space-x-7">
                      <div className="font-extrabold">GENDER </div>
                      <div> Male</div>
                    </div>
                  </li>
                </div>
                <p className="p-5"></p>
                <div className="text-sm">
                  As a 4th-year B.Tech student at IIT Kanpur, I've cherished my
                  time on campus, but it's time for me to move on. Before I
                  depart, <br></br> I'm offering a reliable air cooler for sale.
                  This air cooler has been meticulously maintained and has
                  provided me with comfort<br></br> during hot summer days. If
                  you're in search of an efficient cooling solution, look no
                  further. Get in touch to make this air cooler <br></br> yours
                  and beat the heat in style!
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>{" "}
    </div>
  );
}
