'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

export const CreateOrganizerSchema = z.object({
  name: z.string(),
  type: z.enum(['CITY_HALL', 'TOURIST_OFFICE', 'ASSOCIATION', 'OTHER']),
});
export type CreateOrganizerInput = z.infer<typeof CreateOrganizerSchema>;

export default function CreateOrganizerForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid gap-2">
      <FormField
        {...register('name')}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nom</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Nom de l'organisateur" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        {...register('type')}
        name="type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type</FormLabel>
            <FormControl>
              <Select {...field} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionner un type d'organisateur" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CITY_HALL">Mairie</SelectItem>
                  <SelectItem value="TOURIST_OFFICE">
                    Office de tourisme
                  </SelectItem>
                  <SelectItem value="ASSOCIATION">Association</SelectItem>
                  <SelectItem value="OTHER">Autre</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
