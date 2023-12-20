import { ITEMS_PER_PAGE } from '@/base/constant/const';
import { connectToDB } from './connection';
import { User } from './models/user';
import { Product } from './models/product';

export async function fetchUsers(searchParams, page) {
  const regex = RegExp(searchParams, 'i');
  try {
    await connectToDB();
    const [count, users] = await Promise.all([
      User.find({ username: { $regex: regex } }).count(),
      User.find({ username: { $regex: regex } })
        .limit(ITEMS_PER_PAGE)
        .skip(ITEMS_PER_PAGE * (page - 1)),
    ]);
    return { count, users };
  } catch (error) {
    console.error(error);
    throw new Error('Fetching users failed', error);
  }
}

export async function fetchProducts(searchParams, page) {
  const regex = RegExp(searchParams, 'i');
  try {
    await connectToDB();
    const [count, products] = await Promise.all([
      Product.find({ title: { $regex: regex } }).count(),
      Product.find({ title: { $regex: regex } })
        .limit(ITEMS_PER_PAGE)
        .skip(ITEMS_PER_PAGE * (page - 1)),
    ]);
    return { count, products };
  } catch (error) {
    console.error(error);
    throw new Error('Fetching users failed', error);
  }
}

