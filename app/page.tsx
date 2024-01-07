import { Rocket } from "./components/rocket";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="background-gradient"
        style={{
          width: "365px",
          height: "365px",
          top: "-182px",
          left: "-182px",
        }}
      ></div>
      <div
        className="background-gradient"
        style={{
          width: "365px",
          height: "365px",
          bottom: "-182px",
          right: "-182px",
        }}
      ></div>
      <h1 className="font-semibold text-white text-7xl uppercase">
        coming soon
      </h1>
      <Rocket animationData="/animations/rocket.json" />
    </main>
  );
}
