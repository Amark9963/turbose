import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <LogoMark variant="E" theme="light" showSubtitle />
        <p className="text-white/20 text-xs tracking-wide font-body">
          © {new Date().getFullYear()} Turbose AI Labs Enterprise. All rights reserved.
        </p>
        <p className="text-white/20 text-xs tracking-wide font-body">
          amar@turbose.com
        </p>
      </div>
    </footer>
  );
}