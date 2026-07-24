import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalHeroV0 } from "./_components/JournalHeroV0";
import { JournalTabsSectionV0 } from "./_components/JournalTabsSectionV0";
import JournalBreadCrumbs from "@/components/JournalBreadCrumbs";
import { RiyaDockedWidgetV3 } from "@/app/journal-v3/[slug]/_components/RiyaDockedWidgetV3";
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
        title:
            journalData.article?.title ||
            slug
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "),
        description:
            journalData.article?.description ||
            "A real home-buying journey on Gruha.ai — budgets, fears, and futures built together.",
    };
}

const getIcon = (
    name: string,
    props = { className: "h-5 w-5", strokeWidth: 2 }
) => {
    const Icon = (Icons as any)[name] || Icons.HelpCircle;
    return <Icon {...props} />;
};

export default async function JournalSlugPageV0({
    params,
}: JournalSlugPageProps) {
    const { slug } = await params;
    const journalData = await getJournalBySlug(slug);

    if (!journalData) {
        notFound();
    }

    const article = {
        ...journalData.article,
        learnings: (journalData.article?.learnings || []).map((item: any) => ({
            icon: typeof item.icon === "string" ? getIcon(item.icon) : item.icon,
            text: typeof item === "string" ? item : item.text,
        })),
    };

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Inter+Tight:wght@400;500;600&display=swap"
                rel="stylesheet"
            />

            <main className="min-h-screen bg-[#F3F6F9] text-[#111821] antialiased">
                {/* ── Top Bar Breadcrumbs ──────────────────────────────────── */}
                <JournalBreadCrumbs />

                {/* ── Dynamic Hero Section V0 ──────────────────────────────── */}
                <JournalHeroV0
                    title={article.title}
                    description={article.description}
                    learnings={article.learnings}
                />

                {/* ── Dynamic Component-Based Tabs Section V0 ───────────────── */}
                <JournalTabsSectionV0 tabsData={journalData.tabs} />


            </main>

            <FooterVariant />
        </>
    );
}
