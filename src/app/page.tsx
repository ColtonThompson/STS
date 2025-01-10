import CountdownTool from "./components/CountdownTool";

export const metadata = {
  title: "Streamer Tool Suite",
  description: "Streamer Tool Suite is a collection of tools that can add features to your stream!",
};

export default function Home() {
  return (
    <div>
      <CountdownTool/>
    </div>
  );
}
