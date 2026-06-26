'use client';

/**
 * ClientComponents.tsx
 * This wrapper file lives in a Client Component boundary so that
 * `next/dynamic` with `ssr: false` is allowed here (per Next.js 16 docs).
 * Server Components in page.tsx import from here instead of using dynamic() directly.
 */

import dynamic from 'next/dynamic';

export const LanyardClient = dynamic(
  () => import('@/components/organisms/Lanyard/Lanyard'),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[500px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
      </div>
    ),
  }
);

export const ShapeGridClient = dynamic(
  () => import('@/components/organisms/ShapeGrid/ShapeGrid'),
  { ssr: false }
);

export const BubbleMenuClient = dynamic(
  () => import('@/components/organisms/BubbleMenu/BubbleMenu'),
  { ssr: false }
);

export const ScrollStackClient = dynamic(
  () => import('@/components/organisms/ScrollStack/ScrollStack'),
  { ssr: false }
);

export { ScrollStackItem } from '@/components/organisms/ScrollStack/ScrollStack';
