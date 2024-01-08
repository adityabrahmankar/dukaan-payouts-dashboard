import { NavBarItems } from '@/constants'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='h-full flex flex-col justify-between items-center gap-4' >
            <div className='w-full  p-3'>
                <div >
                    {NavBarItems.map((item) => (
                        <div
                            key={item.name}
                            className='flex flex-row gap-3 px-4 py-2 text-sm text-white/80 w-[208px]'>
                            <item.icon />
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full px-3 py-[6px] bg-[#353C53]'>bottom</div>
        </div>
    )
}

export default Navbar