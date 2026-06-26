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
    id: 'alfiyah-booking',
    title: 'Alfiyah Booking App',
    description:
      'Sistem reservasi makeup artist berbasis web dengan manajemen jadwal, segmentasi peran admin, dan notifikasi real-time.',
    tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'REST API'],
    icon: '💄',
    gradient: 'from-zinc-950 to-zinc-900',
  },
  {
    id: 'microservices-profile',
    title: 'Microservices Company Profile',
    description:
      'Simulasi arsitektur microservices pada layout single-page company profile, dengan API gateway independen dan service orchestration.',
    tags: ['Go Fiber', 'Docker', 'Nginx', 'React'],
    icon: '🏢',
    gradient: 'from-zinc-900 to-zinc-950',
  },
  {
    id: 'university-security',
    title: 'University Web Security',
    description:
      'Analisis kriptografi dan keamanan sistem akademik universitas — mencakup implementasi enkripsi data, hashing, dan audit kerentanan.',
    tags: ['PHP', 'Cryptography', 'Security Audit', 'Laravel'],
    icon: '🔐',
    gradient: 'from-zinc-950 to-[#0a0a0a]',
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
