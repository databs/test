import React from 'react'
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Laporan',
    path: '/laporan',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Data',
    path: '/data',
    icon: <AiIcons.AiOutlineDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'SPBU',
    path: '/maps',
    icon: <MdIcons.MdLocalGasStation/>,
    cName: 'nav-text'
  },
  {
    title: 'Office',
    path: '/simple',
    icon: <SiIcons.SiGooglemaps/>,
    cName: 'nav-text'
  }
]
export default SidebarData;