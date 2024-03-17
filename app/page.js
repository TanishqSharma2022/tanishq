"use client"
import { ThemeSwitcher } from '@/components/toggle-theme';
import {Link} from 'next/link'
import Home from './Home';

const Main = () => {
  return (
    <div>
      <ThemeSwitcher />
      <Home />
    </div>
  );
}
export default Main;
// Born in Lucknow, I reside at IISER Bhopal currently.
