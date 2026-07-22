import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { JournalHeroSection } from "./_components/JournalHero";
import { JournalTabsSection } from "./_components/JournalTabsSection";
import JournalBreadCrumbs from "@/components/JournalBreadCrumbs";
import * as Icons from "lucide-react";
import { getJournalBySlug } from "@/lib/journal";
import { FooterVariant } from "@/components/layout/FooterVariant";

interface JournalSlugPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: JournalSlugPageProps): Promise<Metadata> {
    const { slug } = await params;
    const journalData = await getJournalBySlug(slug);

    if (!journalData) {
        return {
            title: "Journal Not Found",
        };
    }

    return {
        title: journalData.article.title || slug
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
        description:
            journalData.article.description || "A real home-buying journey on Gruha.ai — budgets, fears, and futures built together.",
    };
}

const getIcon = (name: string, props = { className: "h-5 w-5", strokeWidth: 2 }) => {
    const Icon = (Icons as any)[name] || Icons.HelpCircle;
    return <Icon {...props} />;
};

export default async function JournalSlugPage({
    params,
}: JournalSlugPageProps) {
    const { slug } = await params;
    const journalData = await getJournalBySlug(slug);

    if (!journalData) {
        notFound();
    }

    const article = {
        ...journalData.article,
        learnings: (journalData.article.learnings || []).map((item) => ({
            icon: getIcon(item.icon),
            text: item.text,
        })),
    };

    return (
        <>
            {/* <Header forceSolid /> */}
            <main className="min-h-screen bg-[#FDFAF7] pb-24">
                <JournalBreadCrumbs />
                {/* ── Section 1 — Hero ───────────────────────────────────────── */}
                <JournalHeroSection
                    tags={article.tags}
                    title={article.title}
                    description={article.description}
                    quote={article.quote}
                    readTime={article.readTime}
                    updatedOn={article.updatedOn}
                    learnings={article.learnings}
                />

                {/* ── Section 2 — Folder Tabs ────────────────────────────────── */}
                <JournalTabsSection tabs={journalData.tabs} />
            </main>
            <FooterVariant />
        </>
    );
}
