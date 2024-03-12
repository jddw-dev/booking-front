'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

export const CreateOrganizerSchema = z.object({
  name: z.string(),
});
export type CreateOrganizerInput = z.infer<typeof CreateOrganizerSchema>;

export default function CreateOrganizerForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid gap-2">
      <div className="grid gap-1">
        <Label className="sr-only">Nom</Label>

        <Input
          {...register('name')}
          id="name"
          placeholder="Nom de l'organisateur"
        />
      </div>
    </div>
  );
}
