import ContentTemplate from '@/components/template/content';
import { productTitle } from '@/lib/content.data';
import { fetchProducts } from '@/lib/mongoose/controllers/product';

export default async function Products({ searchParams }) {
  const queryParams = searchParams.q || '';
  const page = searchParams.page || 1;

  const { count, products } = await fetchProducts(queryParams, page);
  return (
    <>
      <ContentTemplate
        placeholder="search for a user"
        addLink="/dashboard/products/add"
        titleArray={productTitle}
        src="/product.jpg"
        data={products}
        count={count}
      />
    </>
  );
}
