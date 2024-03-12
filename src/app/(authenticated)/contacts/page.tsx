import CreateOrganizer from './_components/create-organizer';

export default async function Contacts() {
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
    </div>
  );
}
