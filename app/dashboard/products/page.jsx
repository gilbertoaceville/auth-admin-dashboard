import ContentTemplate from '@/components/template/content';
import { productTitle } from '@/lib/content.data';

export default function Products() {
  return (
    <ContentTemplate
      placeholder="search for a user"
      addLink="/dashboard/products/add"
      viewLink="/dashboard/products/1"
      titleArray={productTitle}
      src='/noproduct.jpg'
    />
  );
}
