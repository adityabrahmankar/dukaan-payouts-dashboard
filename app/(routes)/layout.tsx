import Navbar from "@/components/navbar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative h-screen inset-0">
            <aside className="fixed inset-y-0 left-0 w-[224px] bg-[#1E2640] px-[10px] py-[16px]">
                <Navbar />
            </aside>
            <section className="pl-[224px]">{children}</section>
        </main>
    )
}

export default DashboardLayout;