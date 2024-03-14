import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function OrganizerDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold">Organizer name</h1>
            <h2 className="text-md font-bold mt-2">Organizer type</h2>
          </div>

          <Separator className="my-4" />

          <div className="grid gap-2">
            <div>
              <h3 className="text-lg font-semibold text-center mb-4">
                Coordonnées
              </h3>

              <div className="grid grid-cols-2 gap-1">
                <div>
                  <h4 className="text-md font-normal">Emails</h4>
                </div>

                <div className="text-sm font-light">
                  <p>john.doe@mail.com</p>
                  <p>john.doe@mail.com</p>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="grid grid-cols-2 gap-1">
                <div>
                  <h4 className="text-md font-normal">Téléphones</h4>
                </div>

                <div className="text-sm font-light">
                  <p>0123456789</p>

                  <p>0123456789</p>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="grid grid-cols-2 gap-1">
                <div>
                  <h4 className="text-md font-normal">Adresse</h4>
                </div>

                <div className="text-sm font-light">
                  <p>
                    5 rue de l'Isle
                    <br />
                    77 390 Champdeuil
                  </p>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="grid grid-cols-2 gap-1">
                <div>
                  <h4 className="text-md font-normal">Site web</h4>
                </div>

                <div className="text-sm font-light">
                  <p>http://www.john-doe.com</p>
                </div>
              </div>
            </div>

            <Separator className="mt-2 mb-4" />

            <div>
              <h3 className="text-lg font-semibold text-center mb-4">
                Commentaires
              </h3>

              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sodales pharetra tortor, accumsan placerat eros dapibus ac. Nam
                sodales tempor nisl, ac tempor dui pretium eget. Etiam et
                laoreet risus, eget lacinia dui. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <Tabs defaultValue="summary" className="w-full">
            <TabsList>
              <TabsTrigger value="summary">Résumé</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="emails">Emails</TabsTrigger>
              <TabsTrigger value="calls">Appels</TabsTrigger>
              <TabsTrigger value="tasks">Tâches</TabsTrigger>
            </TabsList>

            <TabsContent value="summary">Résumé</TabsContent>
            <TabsContent value="notes">Notes</TabsContent>
            <TabsContent value="emails">Emails</TabsContent>
            <TabsContent value="calls">Appels</TabsContent>
            <TabsContent value="tasks">Tâches</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
