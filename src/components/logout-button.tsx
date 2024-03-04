'use client';

import { Button } from './ui/button';

export default function LogoutButton() {
  return <Button onClick={() => console.log('signout')}>Logout</Button>;
}
