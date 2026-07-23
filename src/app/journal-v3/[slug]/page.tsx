import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalHeroV3 } from "./_components/JournalHeroV3";
import { JournalTabsSectionV3 } from "./_components/JournalTabsSectionV3";
import { JournalBreadCrumbsV3 } from "./_components/JournalBreadCrumbsV3";
import { RiyaDockedWidgetV3 } from "./_components/RiyaDockedWidgetV3";
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

export default async function JournalSlugPageV3({
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
            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
            />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Inter+Tight:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <div
                className="min-h-screen bg-[#F3F6F9] text-[#111821] antialiased selection:bg-[#FBEDE7]"
                style={{
                  fontFamily: "'Inter Tight', system-ui, sans-serif",
                }}
            >
                {/* ── Top Bar Header ────────────────────────────────────────── */}
                <JournalBreadCrumbsV3 title={article.title} />

                {/* ── Section 1 — Hero Cover ───────────────────────────────── */}
                <JournalHeroV3
                    tags={article.tags}
                    title={article.title}
                    description={article.description}
                    quote={article.quote}
                    readTime={article.readTime}
                    updatedOn={article.updatedOn}
                    learnings={article.learnings}
                />

                {/* ── Section 2 — Section Index & Tab Content ─────────────── */}
                <JournalTabsSectionV3 tabs={journalData.tabs} />

                {/* ── Docked AI Companion ───────────────────────────────────── */}
                <RiyaDockedWidgetV3 />
            </div>

            <FooterVariant />
        </>
    );
}
