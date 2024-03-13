import { backendRoutes } from '@/config/backend-routes';
import { authenticatedFetch } from '@/lib/authenticatedFetch';
import CreateOrganizer from './_components/create-organizer';
import OrganizersList from './_components/organizers-list';

export default async function Contacts() {
  const fetchOrganizers = async () => {
    const res = await authenticatedFetch(backendRoutes.organizers);
    if (!res.ok) {
      console.error('!res.ok');
      // TODO : add toast
      return [];
    }

    const jsonRes = await res.json();
    return jsonRes.data;
  };

  const organizers = await fetchOrganizers();

  return (
    <div className="container relative">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Gestion des contacts
      </h1>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Retrouvez ici l&apos;intégralité des fonctions liées à la gestion de vos
        contacts.
      </p>

      <CreateOrganizer />

      <div className="mt-4">
        <OrganizersList organizers={organizers} />
      </div>
    </div>
  );
}
