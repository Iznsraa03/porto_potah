import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaPython, FaLaravel, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiGo, SiSupabase, SiMysql, SiFlutter, SiKotlin } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';

export const skills = [
  {
    category: 'Frontend',
    icon: '🖥️',
    color: 'from-sky-500 to-blue-600',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <RiNextjsFill /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-blue-600 to-blue-800',
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Golang', icon: <SiGo /> },
      { name: 'Laravel', icon: <FaLaravel /> },
      { name: 'Firebase', icon: <IoLogoFirebase /> },
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    category: 'Mobile',
    icon: '📱',
    color: 'from-indigo-500 to-blue-700',
    items: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Kotlin', icon: <SiKotlin /> },
      { name: 'Java', icon: <FaJava /> },
    ],
  },
];

export const projects = [
  {
    id: 'task-tracker-loco21pro',
    title: 'Task Tracker Loco21Pro',
    description:
      'Website tracking tugas untuk pelaksanaan event Loco21Pro. Memudahkan koordinasi dan pemantauan progres tugas antar divisi secara real-time.',
    longDescription:
      'Task Tracker Loco21Pro adalah sistem manajemen tugas berbasis web yang dirancang khusus untuk mendukung pelaksanaan event Loco21Pro. Aplikasi ini memungkinkan koordinator event memantau perkembangan tugas setiap divisi secara real-time, mengatur prioritas pekerjaan, dan memastikan semua tanggung jawab terlaksana tepat waktu. Dilengkapi dengan fitur notifikasi, pelaporan progres, dan manajemen anggota tim.',
    tags: ['NextJS', 'React', 'ExpressJS'],
    image: '/project/tasktrackerloco/loco.png',
    status: 'Done' as const,
    gradient: 'from-zinc-950 to-zinc-900',
  },
  {
    id: 'bot-auto-click',
    title: 'Bot Auto Click',
    description:
      'Sistem Bot Auto Click untuk Android Virtual Device (AVD). Mengotomatiskan interaksi layar pada emulator Android secara presisi dan efisien.',
    longDescription:
      'Bot Auto Click adalah sistem otomatisasi yang dirancang untuk Android Virtual Device (AVD). Bot ini mampu mengeksekusi serangkaian aksi klik, gestur, dan input teks secara otomatis pada emulator Android dengan ketepatan koordinat yang tinggi. Cocok untuk keperluan pengujian aplikasi, simulasi interaksi pengguna, dan otomatisasi tugas berulang pada lingkungan Android tanpa memerlukan intervensi manual.',
    tags: ['Python', 'ADB', 'Android Studio', 'AVD'],
    image: '/project/botAutoClick/Autoclick.png',
    status: 'On Progress' as const,
    gradient: 'from-zinc-900 to-zinc-950',
  },
  {
    id: 'Comopay',
    title: 'Comopay - Sport Booking System',
    description:
      'Aplikasi sistem booking online yang di lengkapi fitur wallet sebagai cost untuk melakukan booking',
    longDescription:
      'Aplikasi ini adalah platform pemesanan layanan (booking) modern yang dirancang untuk memberikan pengalaman transaksi yang cepat, aman, dan tanpa hambatan. Menggabungkan kemudahan penjadwalan dengan sistem pembayaran terpusat melalui fitur In-App Wallet, platform ini secara efektif menghilangkan kerumitan proses pembayaran manual dan mempercepat konfirmasi pesanan.',
    tags: ['Golang', 'Flutter', 'NextJS'],
    image: '/project/comopay/c4.png',
    status: 'On Progress' as const,
    gradient: 'from-zinc-900 to-zinc-950',
  },
];


export const navItems = [
  {
    label: 'home',
    href: '#hero',
    ariaLabel: 'Home',
    rotation: -8,
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    hoverStyles: { bgColor: '#2563eb', textColor: '#ffffff' }
  },
  {
    label: 'skills',
    href: '#skills',
    ariaLabel: 'Skills',
    rotation: 8,
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    hoverStyles: { bgColor: '#2563eb', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: -8,
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    hoverStyles: { bgColor: '#2563eb', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: 'mailto:hello@potah.dev',
    ariaLabel: 'Contact',
    rotation: 8,
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    hoverStyles: { bgColor: '#2563eb', textColor: '#ffffff' }
  }
];
