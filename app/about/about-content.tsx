import { Suspense } from "react";
import AboutSection from "@/components/sections/About";
import Loading from "./loading";

export default function AboutContent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>
    </main>
  );
}
