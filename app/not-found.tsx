import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "Athena | Couldn't find the page you were looking for",
  description: "Created by Alazar Michael",
};
const Athena404 = (props: Props) => {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        Couldn&apos;t find your page
      </div>
    </>
  );
};

export default Athena404;
