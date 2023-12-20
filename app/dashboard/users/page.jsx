import ContentTemplate from '@/components/template/content';
import { userTitle } from '@/lib/content.data';
import { fetchUsers } from '@/lib/mongoose/controllers/user';

export default async function Users({ searchParams }) {
  const queryParams = searchParams.q || '';
  const page = searchParams.page || 1;

  const {count, users} = await fetchUsers(queryParams, page);

  return (
    <ContentTemplate
      placeholder="search for a user"
      addLink="/dashboard/users/add"
      viewLink="/dashboard/users/1"
      titleArray={userTitle}
      src="/profile.png"
      count={count}
      data={users}
    />
  );
}
