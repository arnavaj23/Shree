// import React from "react";
// import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@nextui-org/react";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
//         <div className="bg-blue-500 px-4 py-3 rounded-t-lg">
//           <h2 className="text-white font-semibold text-lg">
//             You are chatting with H . R KADIM
//           </h2>
//         </div>
//         <div className="overflow-y-auto max-h-80 px-4 py-2">
//           <div className="my-1">
//             <div className="flex justify-end">
//               <div className="bg-gray-200 rounded-lg px-3 py-2">
//                 <p className="text-sm text-gray-700">
//                   Hi I am interested in buying<br></br> your air cooler, could
//                   we please meet?
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="my-1">
//             <div className="flex justify-start">
//               <div className="bg-gray-200 rounded-lg px-3 py-2">
//                 <p className="text-sm text-gray-700">
//                   Sure, lets meet at around 6 in<br></br> Hall 1 Canteen
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <div className="grid w-full gap-2">
//           <Textarea placeholder="Type your message here." />
//           <Button className="bg-blue-500 hover:bg-blue-500 text-white">
//             Send message
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
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

export default function Home() {
  const [chat_messages, chat_setMessages] = useState([
    {
      text: "Hi I am interested in buying your air cooler, could we please meet?",
      isUser: false,
    },
    {
      text: "Sure, lets meet at around 6 in Hall 1 Canteen",
      isUser: true,
    },
  ]);

  const [chat_newMessage, chat_setNewMessage] = useState("");

  const chat_handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    chat_setNewMessage(event.target.value);
  };

  const chat_handleSendMessage = () => {
    chat_setMessages([
      ...chat_messages,
      { text: chat_newMessage, isUser: true },
    ]);
    chat_setNewMessage("");
  };

  const [messages, setMessages] = useState([
    {
      text: "Hi I am Mr.Pclub Seller, how can I help you in Chats section",
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
              className="bg-cover  bg-center px-2 py-3 rounded-t-lg"
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
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <div className="bg-blue-500 px-4 py-3 rounded-t-lg">
          <h2 className="text-white font-semibold text-lg">
            You are chatting with H . R KADIM
          </h2>
        </div>
        <div className="overflow-y-auto max-h-80 px-4 py-2">
          {chat_messages.map((message, index) => (
            <div
              key={index}
              className={`my-1 ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg max-w-xs px-6 py-4 ${
                  message.isUser ? "bg-blue-100 mr-auto" : "bg-blue-300 ml-auto"
                }`}
              >
                <p className="text-sm text-gray-700">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Type your message here."
            value={chat_newMessage}
            onChange={chat_handleMessageChange}
          />
          <Button
            className="bg-blue-500 hover:bg-blue-500 rounde text-white"
            onClick={chat_handleSendMessage}
          >
            Send message
          </Button>
        </div>
      </div>
    </div>
  );
}
