'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { useState } from 'react';
import { Organizer } from '../_types/organizer';

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
      <div className="mb-2 flex items-center space-x-2">
        <Switch
          id="table-view"
          onClick={handleTableView}
          checked={isTableView}
        />
        <Label htmlFor="table-view">Vue en tableau</Label>
      </div>

      {!isTableView && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {organizers.map((organizer) => (
            <Card key={organizer.id}>
              <CardHeader>
                <CardTitle>{organizer.name}</CardTitle>
                <CardDescription>-type-</CardDescription>
              </CardHeader>

              <CardContent>
                <p>Content...</p>
              </CardContent>

              <CardFooter>
                <Button variant="secondary">Voir</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {isTableView && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {organizers.map((organizer) => (
              <TableRow key={organizer.id}>
                <TableCell>{organizer.name}</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
