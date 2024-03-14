import { z } from 'zod';

const OrganizerSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(['CITY_HALL', 'TOURIST_OFFICE', 'ASSOCIATION', 'OTHER']),
  emails: z.array(z.string().email()).optional(),
  phones: z.array(z.string()).optional(),
});
export type Organizer = z.infer<typeof OrganizerSchema>;

export const TranslatedOrganizerType = {
  CITY_HALL: 'MAIRIE',
  TOURIST_OFFICE: 'OFFICE DE TOURISME',
  ASSOCIATION: 'ASSOCIATION',
  OTHER: 'AUTRE',
};
