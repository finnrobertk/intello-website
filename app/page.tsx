import {redirect} from 'next/navigation';

const defaultLocale = 'en';

export default function RootRedirect() {
  redirect(`/${defaultLocale}`);
}
