// icons
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiChatBubbleOvalLeftEllipsis,
  
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiBriefcase /> },
  { name: 'testimonials', path: '/testimonials',icon: <HiChatBubbleBottomCenterText />},
  {name: 'contact', path: '/contact', icon: <HiChatBubbleOvalLeftEllipsis />},
  
];
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname
  return (
    <nav className='flex flex-row items-center xl:justify-center gap-y-4 fixed h-max top-10 mt-auto xl:right-[28%] z-50'>
      <div className="flex w-full xl:flex-row items-center justify-between xl:justify-center gap-x-20 px-4 md:px-40 xl:px-20 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link className={`${link.path === pathname && 'text-accent'} relative flex flex-col items-center group hover:text-accent transition-all duration-300`} href={link.path} key={index}>
              <div>{link.icon}</div>
              <div className='absolute top-8 mt-2 hidden xl:group-hover:block'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px] text-sm'>
                  <div className='border-solid border-t-white border-t-8 border-x-transparent border-x-[6px] border-b-0 absolute -top-4 left-1/2 transform -translate-x-1/2'></div>
                  <div className='text-black'>{link.name}</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
};

export default Nav;
