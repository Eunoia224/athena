import {
  IconBolt,
  IconBracketsContain,
  IconEyeglass,
  IconNotes,
  IconUserStar,
  IconUsersGroup,
} from "@tabler/icons-react";
import { ReactNode } from "react";

interface featType {
  title: string;
  body: string;
  icon: ReactNode;
}
const Features = () => {
  const feat: featType[] = [
    {
      title: "Simply Fast",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione ullam pariatur minus eos dolorum distinctio sed mollitia maxime odio?",
      icon: <IconBolt size={"10rem"} stroke={0.2} />,
    },
    {
      title: "Detailed Report",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione ullam pariatur minus eos dolorum distinctio sed mollitia maxime odio?",
      icon: <IconNotes size={"10rem"} stroke={0.2} />,
    },
    {
      title: "Easier Filtering",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione ullam pariatur minus eos dolorum distinctio sed mollitia maxime odio?",
      icon: <IconEyeglass size={"10rem"} stroke={0.2} />,
    },
    {
      title: "Ease Of Use",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione ullam pariatur minus eos dolorum distinctio sed mollitia maxime odio?",
      icon: <IconUserStar size={"10rem"} stroke={0.2} />,
    },
    {
      title: "Collaboration",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione ullam pariatur minus eos dolorum distinctio sed mollitia maxime odio?",
      icon: <IconUsersGroup size={"10rem"} stroke={0.2} />,
    },
    {
      title: "Control",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione ullam pariatur minus eos dolorum distinctio sed mollitia maxime odio?",
      icon: <IconBracketsContain size={"10rem"} stroke={0.2} />,
    },
  ];

  const listFeatuers = feat.map((feature) => {
    return (
      <div
        key={feature.title}
        className="bg-primary-0 dark:bg-primary-10 flex flex-col justify-evenly p-4 rounded-lg shadow-xl"
      >
        <div className="mx-auto">{feature.icon}</div>
        <div className="text-2xl">{feature.title}</div>
        <div>{feature.body}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="my-16">
        <p className="text-3xl mb-12">Some of the features</p>
        <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
          {listFeatuers}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Features;
