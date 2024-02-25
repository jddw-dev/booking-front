import { getServerAuthSession } from '@/server/auth';

export default async function Home() {
  const authSession = await getServerAuthSession();

  return (
    <div className="container relative">
      <h1>Dashboard</h1>

      <p>Welcome to application dashboard</p>
    </div>
  );
}
