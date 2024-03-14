'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { useState } from 'react';
import { Organizer, TranslatedOrganizerType } from '../_types/organizer';

export interface OrganizersListProps {
  organizers: Organizer[];
}

export default function OrganizersList({ organizers }: OrganizersListProps) {
  const [isTableView, setTableView] = useState(false);

  const handleTableView = () => {
    setTableView(!isTableView);
  };

  return (
    <>
      <div className="mb-4 flex items-center space-x-2">
        <Switch
          id="table-view"
          onClick={handleTableView}
          checked={isTableView}
        />
        <Label htmlFor="table-view">Vue en tableau</Label>
      </div>

      {!isTableView && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {organizers.map((organizer) => (
            <Link
              key={organizer.id}
              href={`/contacts/organizers/${organizer.id}`}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    {organizer.name}
                  </CardTitle>
                  <CardDescription>
                    {TranslatedOrganizerType[organizer.type]}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {organizer.emails?.map((email) => (
                    <p key={email}>{email}</p>
                  ))}

                  {organizer.phones?.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {isTableView && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Emails</TableHead>
              <TableHead>Téléphones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {organizers.map((organizer) => (
              <TableRow key={organizer.id}>
                <TableCell>
                  <Link
                    key={organizer.id}
                    href={`/contacts/organizers/${organizer.id}`}
                  >
                    {organizer.name}
                  </Link>
                </TableCell>
                <TableCell>{TranslatedOrganizerType[organizer.type]}</TableCell>
                <TableCell>
                  {organizer.emails?.map((email) => (
                    <p key={email}>{email}</p>
                  ))}
                </TableCell>
                <TableCell>
                  {organizer.phones?.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
