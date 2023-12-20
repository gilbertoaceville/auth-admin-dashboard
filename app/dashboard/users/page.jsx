import ContentTemplate from '@/components/template/content';
import { fetchUsers } from '@/lib/mongoose/api';

export default async function Users() {
  const users = await fetchUsers();
  return <ContentTemplate />;
}
