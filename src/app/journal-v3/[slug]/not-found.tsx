import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { FooterVariant } from "@/components/layout/FooterVariant";

export default function JournalNotFound() {
    return (
        <>
            <Header forceSolid />
            <main className="min-h-[70vh] bg-[#F8FAFC] flex items-center justify-center px-4">
                <div className="text-center space-y-4 max-w-md">
                    <span className="text-6xl font-extrabold text-[#FF5733]">404</span>
                    <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Journal Not Found</h1>
                    <p className="text-slate-600 text-sm">
                        The home buying journal you are looking for could not be found.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-[#FF5733] text-white font-bold text-sm shadow-md hover:bg-[#E0482B] transition-colors text-decoration-none"
                        >
                            Return Home
                        </Link>
                    </div>
                </div>
            </main>
            <FooterVariant />
        </>
    );
}
