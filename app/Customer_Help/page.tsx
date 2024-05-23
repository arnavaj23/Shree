import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    // <div className=" px-10">
    //   <h1 className=" px-10 py-5 text-xl font-semibold">
    //     Customer Support | 24X7 Customer care service{" "}
    //   </h1>
    //   <div className=""></div>
    // </div>
    <div className="ml-64 left-0 px-0 pt-10 pb-8 shadow-xl  ring-1 ring-gray-900/5 mx-auto max-w-screen-lg rounded-lg sm:px-10">
      <Card>
        {/* <CardHeader className=" text-xl font-semibold">
          Customer Support | 24 X 7 Customer care available
        </CardHeader> */}
        <CardTitle className="px-4">
          Customer Support | 24 X 7 Customer care available
        </CardTitle>
        <CardDescription className="px-4 py-4 text-justify">
          The Flipkart Help Centre page lists out various types of issues that
          you may have encountered so that there can be quick resolution and you
          can go back to shopping online. For example, you can get more
          information regarding order tracking, delivery date changes, help with
          returns (and refunds), and much more. The Flipkart Help Centre also
          lists out more information that you may need regarding Flipkart Plus,
          payment, shopping, and more. The page has various filters listed out
          on the left-hand side so that you can get your queries solved quickly,
          efficiently, and without a hassle. You can get the Flipkart Help
          Centre number or even access Flipkart Help Centre support if you need
          professional help regarding various topics. The support executive will
          ensure speedy assistance so that your shopping experience is positive
          and enjoyable. You can even inform your loved ones of the support page
          so that they can properly get their grievances addressed as well. Once
          you have all your queries addressed, you can pull out your shopping
          list and shop for all your essentials in one place. You can shop
          during festive sales to get your hands on some unbelievable deals
          online. This information is updated on 23-May-24
        </CardDescription>
        <CardContent>
          <br></br>
          CONTACT : 7499856419<br></br>Email :{" "}
          <a
            href="mailto:arnavaj23@iitk.ac.in"
            className="text-blue-500 hover:text-blue-700"
          >
            arnavaj23@iitk.ac.in
          </a>
        </CardContent>
        <br></br>
        <CardDescription className="px-4 py-4 text-justify">
          <div className=" font-semibold">
            Flipkart Help Centre: Get All Shopping Solutions Here
          </div>
          <br></br>
          Once you place your order on any online shopping store, the next
          obvious thing to do is wait for your product to arrive. This wait can
          be quite anxiety-ridden if you do not get updates about your order or
          do not receive support post-delivery of your order. However, with the
          Flipkart Help Centre, your wait becomes exciting, and your shopping
          experience becomes joyful, thanks to all the support it provides
          related to your order. With websites, like Flipkart, the entire
          shopping experience has gone through a major change. Now, you can
          conveniently shop any time, from anywhere, and anything that you want.
          These websites are one-stop destinations for all your needs and
          requirements. From skincare products to home appliances and groceries
          to baby care essentials, everything is just a few clicks away. These
          websites provide you convenience, at the same time, a bitter
          experience can make online shopping a nightmare for many. To ensure
          that your shopping experience is delightful, the Flipkart Help centre
          support offers every assistance that you need. From reporting specific
          delivered product-related issues to letting you manage your orders,
          the Flipkart Helpcentre has solutions to all your worries related to
          your orders. Furthermore, if you do not find a solution to your
          queries here, then you can use the Flipkart Help Centre number to get
          your issues solved. Keep reading to know more about Flipkart Help
          Centre and what all assistance you get here:
        </CardDescription>

        <br></br>
        <CardDescription className="px-4 py-4 text-justify">
          <div className=" font-semibold">24x7 Customer Care Support</div>
          <br></br>
          You can 24x7 Customer Care Support on the Flipkart Help Centre. Any
          query or issue that you may possibly have while shopping on Flipkart
          is taken care here. This page is easy to navigate, and you can get
          support almost immediately. Once you log onto your Flipkart account,
          this page shows you your recent orders and let you report any issue.
          By clicking on the specific order, you can raise your query. It also
          has a chat option to ensure that your queries and issues are taken
          care of. Similarly, there are other options on this page that are
          created to assist you and to make your shopping experience
          hassle-free. You can get support any time and get a satisfactory
          solution to your queries and issues within minutes.
        </CardDescription>

        <br></br>
        <CardDescription className="px-4 py-4 text-justify">
          <div className=" font-semibold">
            Types and Topics of Support in Flipkart Help Centre
          </div>
          <br></br>
          Apart from helping you with your orders and/or your delivered
          product-related issues, you can find various other support at Flipkart
          Help Centre. You can select from three types of issues here - help
          with your issues, help with your order, and help with other issues.
          You can track your orders here, manage your orders, get help with your
          returns and refunds issues, and even get help related to various other
          issues, such as offers, payment, Flipkart Plus, etc. There are also
          details about specific help topics, such as cancellations and returns,
          wallet, insurance, Flipkart Quick, SuperCoins, Gift Card, etc.
          available here. So, log on to your Flipkart account and shop without
          hassles and with complete help and support.
        </CardDescription>
      </Card>
    </div>
  );
}
