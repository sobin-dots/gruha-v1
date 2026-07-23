import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalHeroV4 } from "./_components/JournalHeroV4";
import { JournalTabsSectionV4 } from "./_components/JournalTabsSectionV4";
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

export default async function JournalSlugPageV4({
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
            <main className="min-h-screen bg-white pb-24">
                {/* ── Breadcrumbs ────────────────────────────────────────────── */}
                <JournalBreadCrumbs />

                {/* ── Hero Section V4 ────────────────────────────────────────── */}
                <JournalHeroV4
                    title="The Sixteenth Floor Dream Journal."
                    description={article.description}
                    learnings={article.learnings}
                />

                {/* ── Folder Tabs Section V4 (With Image-Matched Persona Section) ── */}
                <JournalTabsSectionV4 tabs={journalData.tabs} />

                {/* ── Docked AI Companion ─────────────────────────────────── */}
                <RiyaDockedWidgetV3 />
            </main>

            <FooterVariant />
        </>
    );
}
