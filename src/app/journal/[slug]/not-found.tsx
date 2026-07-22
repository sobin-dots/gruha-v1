import Link from "next/link";
import JournalBreadCrumbs from "@/components/JournalBreadCrumbs";
import { FooterVariant } from "@/components/layout/FooterVariant";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function JournalNotFound() {
    return (
        <>
            <main className="min-h-screen bg-[#FDFAF7] pb-24 flex flex-col justify-between">
                <div>
                    <JournalBreadCrumbs />
                    <div className="max-w-3xl mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6 text-amber-700">
                            <FileQuestion className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
                            Journal Not Found
                        </h1>
                        <p className="text-slate-600 max-w-md text-base leading-relaxed mb-8">
                            We couldn't find a home-buying journal matching this link. The journal may have been moved or doesn't exist yet.
                        </p>
                        <Link
                            href="/journal/outer-sarjapur-road"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full transition-colors text-sm shadow-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Explore Outer Sarjapur Road Journal
                        </Link>
                    </div>
                </div>
            </main>
            <FooterVariant />
        </>
    );
}
