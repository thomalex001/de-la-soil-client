import { ClientOnly } from './client';

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ['login'] }, {slug: ['about']} ];
}

export default function Page() {
  return <ClientOnly />;
}
