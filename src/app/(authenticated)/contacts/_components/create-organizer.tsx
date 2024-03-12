'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CreateOrganizerForm, {
  CreateOrganizerInput,
  CreateOrganizerSchema,
} from './create-organizer.form';

const DialogTitleContent = () => {
  return <>Ajouter un organisateur</>;
};

const DialogDescriptionContent = () => {
  return (
    <>
      Un organisateur est une structure responsable de l&apos;organisation
      d&apos;un ou plusieurs événement(s). Plusieurs types d&apos;organisateurs
      sont déjà intégrés à l&apos;application : mairie, office de tourisme,
      association, ... Vous pouvez également ajouter vos propres types
      d&apos;organisateurs.
    </>
  );
};

export default function CreateOrganizer() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const methods = useForm<CreateOrganizerInput>({
    resolver: zodResolver(CreateOrganizerSchema),
    defaultValues: {
      name: '',
    },
  });
  const onSubmit = async (values: CreateOrganizerInput) => {
    console.log('onSubmit', values);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mt-6">Ajouter un organisateur</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>
                  <DialogTitleContent />
                </DialogTitle>
                <DialogDescription>
                  <DialogDescriptionContent />
                </DialogDescription>
              </DialogHeader>

              <div className="my-4">
                <CreateOrganizerForm />
              </div>

              <DialogFooter>
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={() => setOpen(false)}
                >
                  Annuler
                </Button>
                <Button type="submit">Enregistrer</Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="mt-6">Ajouter un organisateur</Button>
      </DrawerTrigger>

      <DrawerContent>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DrawerHeader>
              <DrawerTitle>
                <DialogTitleContent />
              </DrawerTitle>
              <DrawerDescription>
                <DialogDescriptionContent />
              </DrawerDescription>
            </DrawerHeader>

            <div className="my-4">
              <CreateOrganizerForm />
            </div>

            <DrawerFooter>
              <Button type="reset" variant="secondary">
                Annuler
              </Button>
              <Button type="submit">Enregistrer</Button>
            </DrawerFooter>
          </form>
        </FormProvider>
      </DrawerContent>
    </Drawer>
  );
}
