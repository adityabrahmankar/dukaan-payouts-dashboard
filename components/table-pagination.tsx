import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export function TablePagination() {
    return (
        <Pagination className="text-[#4D4D4D]">
            <PaginationContent>
                <PaginationPrevious href="/" className="border border-[#4d4d4d]" />
                <PaginationLink href="/">1</PaginationLink>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationLink href="/" isActive>
                    10
                </PaginationLink>
                <div className="hidden lg:flex">
                    <PaginationLink href="/">11</PaginationLink>
                    <PaginationLink href="/">12</PaginationLink>
                    <PaginationLink href="/">13</PaginationLink>
                    <PaginationLink href="/">14</PaginationLink>
                    <PaginationLink href="/">15</PaginationLink>
                    <PaginationLink href="/">16</PaginationLink>
                    <PaginationLink href="/">17</PaginationLink>
                    <PaginationLink href="/">18</PaginationLink>
                </div>
                <PaginationNext href="/" className="border border-[#4d4d4d]" />
            </PaginationContent>
        </Pagination>
    )
}
