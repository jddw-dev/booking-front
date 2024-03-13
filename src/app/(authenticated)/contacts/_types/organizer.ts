import { z } from 'zod';

const OrganizerSchema = z.object({
  id: z.string(),
  name: z.string(),
});
export type Organizer = z.infer<typeof OrganizerSchema>;
