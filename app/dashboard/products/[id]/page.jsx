import SingleProductTemplate from '@/components/template/mono-template/product';
import { fetchProduct } from '@/lib/mongoose/controllers/product';

export default async function SingleProduct({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return <SingleProductTemplate product={product} />;
}
