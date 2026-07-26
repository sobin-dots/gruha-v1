import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Journals",
  description: "Explore real home-buying journeys from the Gruha.ai community in Bengaluru.",
};

export default function CommunityJournalsPage() {
  return (
    <main className="min-h-screen bg-[#F3F6F9] text-[#111821] antialiased">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-24 pb-16">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
          Community Journals
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          Real home-buying journeys from the Gruha.ai community.
        </p>
      </div>
    </main>
  );
}
