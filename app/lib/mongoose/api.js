import { connectToDB } from './connection';
import { User } from './models/user';

export async function fetchUsers() {
  try {
    await connectToDB();
    const users = await User.find({});
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Fetching users failed', error);
  }
}
