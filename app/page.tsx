import type { Metadata } from 'next';

import Rain from './components/Rain';
import IntroScreen from './components/IntroScreen';

export const metadata: Metadata = {
  title: 'Justin Mach Dev',
  description: 'Frontend Developer',
  icons: {
    icon: '/favicon.ico',
  },
  // icons: [],
};

export default function Index() {
  return <IntroScreen />;
}
