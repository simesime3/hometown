"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">地図から気になる自治体を選びましょう</h1>
      <MapComponent />
    </main>
  );
}
