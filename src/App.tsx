import { useState } from "react";
import { Home, BookOpen, CalendarCheck, FileText, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import HomePage from "@/pages/HomePage";
import GradesPage from "@/pages/GradesPage";
import AttendancePage from "@/pages/AttendancePage";
import ReportPage from "@/pages/ReportPage";
import StudentsPage from "@/pages/StudentsPage";
import SettingsPage from "@/pages/SettingsPage";

type TabId = "home" | "grades" | "attendance" | "report" | "students" | "settings";

const TABS: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "الرئيسية", icon: Home },
  { id: "grades", label: "درجات اللغة العربية", icon: BookOpen },
  { id: "attendance", label: "الحضور والغياب", icon: CalendarCheck },
  { id: "report", label: "التقرير", icon: FileText },
  { id: "students", label: "الطلاب", icon: Users },
  { id: "settings", label: "الإعدادات", icon: Settings },
];

export default function App() {
  const [tab, setTab] = useState<TabId>("home");

  return (
    <div dir="rtl" className="min-h-screen bg-slate-100 pb-24 font-sans text-slate-900">
      <header className="relative overflow-hidden bg-gradient-to-l from-teal-700 via-teal-600 to-emerald-500 text-white">
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-emerald-300/20" />
        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl font-bold shadow-inner backdrop-blur">
                س
              </div>
              <div>
                <h1 className="font-serif text-3xl font-bold leading-tight">سجلّي</h1>
                <p className="text-sm text-teal-50/90">منصة متابعة الطالب الأكاديمية</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 px-5 py-3 text-sm backdrop-blur">
              <span className="text-teal-50/80">الفصل الدراسي</span>
              <span className="mr-2 font-semibold">الأول · 1446هـ</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {tab === "home" && <HomePage onNavigate={setTab} />}
        {tab === "grades" && <GradesPage />}
        {tab === "attendance" && <AttendancePage />}
        {tab === "report" && <ReportPage />}
        {tab === "students" && <StudentsPage />}
        {tab === "settings" && <SettingsPage />}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-stretch justify-between gap-1 overflow-x-auto px-2 py-2">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex min-w-20 flex-1 flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-medium transition-all",
                  active
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                )}
              >
                <Icon className={cn("h-5 w-5", active && "text-teal-600")} />
                <span className="whitespace-nowrap">{t.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}