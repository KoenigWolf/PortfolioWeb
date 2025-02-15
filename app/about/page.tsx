import { Suspense } from "react";
import AboutSection from "@/components/sections/About";
import Loading from "../loading";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>
    </main>
  );
}
