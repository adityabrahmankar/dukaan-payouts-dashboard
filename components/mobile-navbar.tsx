
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Navbar from './navbar'

type Props = {}

const MobileNavbar = (props: Props) => {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Menu role='button' aria-label='Open menu' />
            </SheetTrigger>
            <SheetContent side={'left'}>
                <Navbar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar