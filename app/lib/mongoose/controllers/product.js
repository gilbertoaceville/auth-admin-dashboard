'use server';

import { ITEMS_PER_PAGE } from '@/base/constant/const';
import { connectToDB } from '../connection';
import { Product } from '../models/product';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function fetchProducts(searchParams, page) {
  const regex = RegExp(searchParams, 'i');
  try {
    connectToDB();
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

export async function fetchProduct(id) {
  try {
    if (!id) throw new Error('id is not provided');
    connectToDB;

    const product = Product.findById(id);
    return product;
  } catch (error) {
    console.error(error);
    throw new Error('Fetching user failed', error);
  }
}

export async function createProduct(formData) {
  const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

  try {
    if (!title) throw new Error('There is not product title provided');

    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.error(error);
    throw new Error('Issue creating new product', error);
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}

export async function updateProduct(formData) {
  const { id, title, desc, price, stock, color, size } = Object.fromEntries(formData);

  try {
    connectToDB();
    const updatedFields = { title, desc, price, stock, color, size };

    Object.keys(updatedFields).forEach(key => !updatedFields[key] && delete updatedFields[key]);

    await Product.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.error(error);
    throw new Error('Issue updating product', error);
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}

export async function deleteProduct(formData) {
  const { id } = Object.fromEntries(formData);

  try {
    if (!id) throw new Error('There is not product id found');

    connectToDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error('Issue creating new product', error);
  }

  revalidatePath('/dashboard/products');
}
