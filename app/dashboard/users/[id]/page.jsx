import SingleUserPageTemplate from '@/components/template/mono-template/user';
import { fetchUser } from '@/lib/mongoose/controllers/user';

export default async function SingleUser({ params }) {
  const { id } = params; // page folder is an id
  const user = await fetchUser(id);

  return <SingleUserPageTemplate user={user} />;
}
