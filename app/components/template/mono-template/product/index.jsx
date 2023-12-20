import Image from 'next/image';
import styles from '../styles.module.scss';
import { updateProduct } from '@/lib/mongoose/controllers/product';

export default function SingleProductTemplate({ product }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <Image src={product.image || "/product.jpg"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formWrapper}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color || 'color'} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={product.size || 'size'} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder={product.desc} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
