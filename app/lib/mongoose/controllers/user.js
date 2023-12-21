'use server';

import { ITEMS_PER_PAGE } from '@/base/constant/const';
import { connectToDB } from '../connection';
import { User } from '../models/user';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { signIn } from '@/auth';

export async function fetchUsers(searchParams, page) {
  const regex = RegExp(searchParams, 'i');
  try {
    connectToDB();
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

export async function fetchUser(id) {
  try {
    if (!id) throw new Error('id is not provided');

    connectToDB;

    const user = User.findById(id);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Fetching user failed', error);
  }
}

export async function createUser(formData) {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    if (!username || !email || !password) throw new Error('Required data is not provided');

    connectToDB();

    const generatedSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, generatedSalt);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.error(error);
    throw new Error('Issue creating new user', error);
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}

export async function updateUser(formData) {
  const { id, username, email, phone, password, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updatedFields = { username, email, password, phone, address, isActive, isAdmin };

    Object.keys(updatedFields).forEach(key => !updatedFields[key] && delete updatedFields[key]);

    await User.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.error(error);
    throw new Error('Issue updating product', error);
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}

export async function deleteUser(formData) {
  const { id } = Object.fromEntries(formData);

  try {
    if (!id) throw new Error('There is not user id found');

    connectToDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error('Issue creating new product', error);
  }

  revalidatePath('/dashboard/users');
}

// prevState is added since we are using useFormState to get returned data ("/see LoginForm component")
export async function loginUser(prevState, formData) {
  try {
    connectToDB();
    const { username, password } = Object.fromEntries(formData);
    // coming from auth.js with provider name as credentials (credentials - can be replaced if using other auth methods e.g google)
    await signIn('credentials', { username, password });
  } catch (error) {
    console.error(error);
    return 'Invalid Credentials!';
  }
}
