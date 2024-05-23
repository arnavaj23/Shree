// import React from "react";

// import { BellRing, Check } from "lucide-react";
// import { Image } from "@nextui-org/react";
// import { siteConfig } from "@/config/site";
// import Link from "next/link";
// import { title } from "process";

// import { cn } from "@/lib/utils";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Switch } from "@/components/ui/switch";
// import { Button } from "@/components/ui/button";

// const notifications = [
//   {
//     title: "Your call has been confirmed.",
//     description: "1 hour ago",
//   },
//   {
//     title: "You have a new message!",
//     description: "1 hour ago",
//   },
//   {
//     title: "Your subscription is expiring soon!",
//     description: "2 hours ago",
//   },
// ];

// type CardProps = React.ComponentProps<typeof Card>;

// export default function Home({ className, ...props }: CardProps) {
// const list = [
// {
//   title: "Havells cooler",
//   img: "https://m.media-amazon.com/images/I/610RkvgNY0L._SL1500_.jpg",
//   price: "Rs 4900/-",
//   link: "Coolers/SPTCooler",
//   sold: "Person 1",
//   chat: "Coolers/SPTCooler/Chat",
//   des: "You can beat the summer heat with the Hindware Snowcrest XENO 45 L Room Air Cooler. It generates clean, fresh, and odour-free air with its efficient cooling pads.",
// },
// {
//   title: "SPINEHEAL MATTRESS",
//   img: "https://m.media-amazon.com/images/I/718hZIQwZ+L._SL1500_.jpg",
//   price: "Rs 6500/-",
//   link: "Coolers/Hawells",
//   sold: "Person 2",
//   chat: "Coolers/Hawells/Chat",
//   des: "SPINEHEAL MATTRESS Box Type Soft Cotton Filled Bed Mattress, Firm Gadda for Floor, Bed, Travelling, Multipurpose, Light Weight, King Size Mattress (72X48, Double Size)",
// },
// {
//   title: "Bajaj Table Fan",
//   img: "https://m.media-amazon.com/images/I/71qt9+Der5L._SL1500_.jpg",
//   price: "Rs 5000/-",
//   link: "/Kindia",
//   sold: "Person 3",
//   chat: "",
//   des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
// },
// {
//   title: "HoneyWell",
//   img: "https://www.pngmart.com/files/7/Evaporative-Air-Cooler-Transparent-Background.png",
//   price: "Rs 4500/-",
//   link: "/HoneyWell",
//   sold: "Person 4",
//   chat: "",
//   des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
// },
// {
//   title: "Symphony",
//   img: "https://i.pinimg.com/originals/a1/68/9c/a1689c49bbe54a72b75689b30e7e0bbb.png",
//   price: "Rs 7000/-",
//   link: "/Symphony",
//   sold: "Person 5",
//   chat: "",
//   des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
// },
// {
//   title: "LG",
//   img: "https://i.pinimg.com/originals/79/0b/60/790b6093d3e4d55ccf7d31c09b117ed6.png",
//   price: "Rs 7500/-",
//   link: "/LG",
//   sold: "Person 6",
//   chat: "",
//   des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
// },
// {
//   title: "Honeywell 386",
//   img: "https://shop.orientelectric.com/cdn/shop/files/knight-plus-desert-air-cooler-with-ice-chamber-dust-filter-and-high-air-delivery-orient-electric-1.png?v=1696835049",
//   price: "Rs 9000/-",
//   link: "/Honeywell 386",
//   sold: "Person 7",
//   chat: "",
//   des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
// },
// {
//   title: "symphony 20",
//   img: "https://consumer.bluestarindia.com/pub/media/catalog/product/cache/306dd014bf4d3bf54df1536b8c4e0b54/1/_/1_air_coolers_-_maxima_da60ema_straight_view_1.png",
//   price: "Rs 6000/-",
//   link: "/symphony 20",
//   sold: "Person 8",
//   chat: "",
//   des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
// },
// ];

//   return (
//     // <div
//     //   className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto
//     //  sm:rounded-sm sm:px-10"
//     // >
//     <div className="gap-10 grid sm:grid-cols-4 ">
//       {list.map((item, index) => (
//         // <Card shadow="sm" key={index} isPressable>
//         //   <Link href={item.link || "/"}>
//         //     <CardBody className="overflow-visible p-0 ">
//         // <Image
//         //   shadow="sm"
//         //   radius="lg"
//         //   width="100%"
//         //   alt={item.title}
//         //   className="w-full object-cover h-[280px]"
//         //   src={item.img}
//         // />
//         //     </CardBody>
//         //     <div className="items-centre">
//         //       <CardFooter className=" justify-between font-serif ">
//         //         <div className="items-centre text-xl py-4 px-6 text-large">
//         //           <b>{item.title}</b>
//         //         </div>
//         //         <br />
//         //         <p className="text-default-500">{item.price}</p>
//         //       </CardFooter>
//         //     </div>
//         //   </Link>
//         // </Card>

//         <Card className={cn("w-[380px]", className)} {...props}>
//           <Link href={item.link || "/"}>
//             {" "}
//             <CardHeader>
//               <CardTitle className=" text-3xl">{item.title}</CardTitle>
//               <CardTitle className="text-green-600">{item.price}</CardTitle>
//               <CardDescription>Sold by {item.sold}</CardDescription>
//               <div className="border-b-4 border-black"></div>
//             </CardHeader>
//             <CardContent className="grid gap-4">
//               <Image
//                 isZoomed
//                 shadow="sm"
//                 radius="lg"
//                 width="100%"
//                 alt={item.title}
//                 className="w-full object-cover h-[280px]"
//                 src={item.img}
//               />
//               <CardHeader className="text-center">{item.des}</CardHeader>
//               <div className="border-b-4 border-black"></div>
//             </CardContent>
//           </Link>

//           <CardFooter className=" mb-0 flex justify-center">
//             <Link href={item.chat || "/"}>
//               <Button className=" bg-blue-500 full">
//                 <Check className="mr-2 h-4 w-4" /> CHAT NOW
//               </Button>
//             </Link>
//           </CardFooter>
//           <div className="border-b-4 border-black"></div>
//         </Card>

//         // <Card>
//         //   <Link href={item.link || "/"}>
//         //     <div>
//         //       {" "}
//         //       <Image
//         //         isZoomed
//         //         shadow="sm"
//         //         radius="lg"
//         //         width="100%"
//         //         alt={item.title}
//         //         className="w-full object-cover h-[280px]"
//         //         src={item.img}
//         //       />
//         //     </div>
//         //   </Link>
//         // </Card>
//       ))}
//     </div>
//     // </div>
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";

type CardProps = React.ComponentProps<typeof Card>;

export default function Home({ className, ...props }: CardProps) {
  const list = [
    {
      title: "Havells cooler",
      img: "https://m.media-amazon.com/images/I/610RkvgNY0L._SL1500_.jpg",
      price: "Rs 4900/-",
      link: "/Coolers/SPTCooler",
      sold: "Person 1",
      chat: "Coolers/SPTCooler/Chat",
      des: "You can beat the summer heat with the Hindware Snowcrest XENO 45 L Room Air Cooler. It generates clean, fresh, and odour-free air with its efficient cooling pads.",
    },
    {
      title: "SPINEHEAL MATTRESS",
      img: "https://m.media-amazon.com/images/I/718hZIQwZ+L._SL1500_.jpg",
      price: "Rs 6500/-",
      link: "/Coolers/Hawells",
      sold: "Person 2",
      chat: "Coolers/Hawells/Chat",
      des: "SPINEHEAL MATTRESS Box Type Soft Cotton Filled Bed Mattress, Firm Gadda for Floor, Bed, Travelling, Multipurpose, Light Weight, King Size Mattress (72X48, Double Size)",
    },
    {
      title: "Bajaj Table Fan",
      img: "https://m.media-amazon.com/images/I/71qt9+Der5L._SL1500_.jpg",
      price: "Rs 5000/-",
      link: "/Coolers/Hawells",
      sold: "Person 3",
      chat: "Coolers/Hawells/Chat",
      des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
    },
    {
      title: "HoneyWell",
      img: "https://www.pngmart.com/files/7/Evaporative-Air-Cooler-Transparent-Background.png",
      price: "Rs 4500/-",
      link: "/Coolers/Hawells",
      sold: "Person 4",
      chat: "Coolers/Hawells/Chat",
      des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
    },
    {
      title: "Symphony",
      img: "https://i.pinimg.com/originals/a1/68/9c/a1689c49bbe54a72b75689b30e7e0bbb.png",
      price: "Rs 7000/-",
      link: "/Coolers/Hawells",
      sold: "Person 5",
      chat: "Coolers/Hawells/Chat",
      des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
    },
    {
      title: "LG",
      img: "https://i.pinimg.com/originals/79/0b/60/790b6093d3e4d55ccf7d31c09b117ed6.png",
      price: "Rs 7500/-",
      link: "/Coolers/Hawells",
      sold: "Person 6",
      chat: "Coolers/Hawells/Chat",
      des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
    },
    {
      title: "Honeywell 386",
      img: "https://shop.orientelectric.com/cdn/shop/files/knight-plus-desert-air-cooler-with-ice-chamber-dust-filter-and-high-air-delivery-orient-electric-1.png?v=1696835049",
      price: "Rs 9000/-",
      link: "/Coolers/Hawells",
      sold: "Person 7",
      chat: "Coolers/Hawells/Chat",
      des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
    },
    {
      title: "symphony 20",
      img: "https://consumer.bluestarindia.com/pub/media/catalog/product/cache/306dd014bf4d3bf54df1536b8c4e0b54/1/_/1_air_coolers_-_maxima_da60ema_straight_view_1.png",
      price: "Rs 6000/-",
      link: "/Coolers/Hawells",
      sold: "Person 8",
      chat: "Coolers/Hawells/Chat",
      des: "Customers like the air flow of the fan, saying it's a good product that produces cool air. However, some customers have reported issues with the buttons not working.",
    },
  ];

  const [messages, setMessages] = useState([
    {
      text: "Hi I am Mr.Pclub Seller, how can I help you in marketplace",
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
    <div className="px-6 pt-0 pb-8  sm:mx-auto sm:rounded-sm sm:px-10">
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
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((item, index) => (
          <Card className={cn("w-full", className)} {...props}>
            <Link href={item.link || "/"}>
              {" "}
              <CardHeader>
                <CardTitle className=" text-3xl md:text-2xl lg:text-xl">
                  {item.title}
                </CardTitle>

                <CardTitle className="text-green-600 md:text-lg lg:text-base">
                  {item.price}
                </CardTitle>

                <CardDescription className="md:text-sm lg:text-xs">
                  Sold by {item.sold}
                </CardDescription>

                <div className="border-b-4 border-black"></div>
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

                <div className="border-b-4 border-black"></div>
              </CardContent>
            </Link>

            <CardFooter className=" mb-0 flex justify-center">
              <Link href={item.chat || "/"}>
                <Button className=" bg-blue-500 hover:bg-blue-700 full">
                  <Check className="mr-2 h-4 w-4" /> CHAT NOW
                </Button>
              </Link>
            </CardFooter>

            <div className="border-b-4 border-black"></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
