import ToolMenu from "./components/menu/ToolMenu";

export const metadata = {
  title: "Streamer Tool Suite",
  description: "Streamer Tool Suite is a collection of tools that can add features to your stream!",
};

export default function Home() {
  return (
    <div className="block text-center">
      <div className="justify-center items-center w-screen">
        <h2>Streamer Tool Suite</h2>
        <ToolMenu />
      </div>
    </div>
  );
}
