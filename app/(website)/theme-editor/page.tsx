'use client'

import { ThemeGenerator } from '@/components/theme-generator';
import radixColors from '@/public/radix-colors.json';

const Page = () => {
  return <ThemeGenerator radixColors={radixColors} />;
};

export default Page;