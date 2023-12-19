import Image from 'next/image';
import styles from "../styles.module.scss";

export default function SingleProductTemplate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <Image src="/product.jpg" alt="" fill />
        </div>
        Product
      </div>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <input type="hidden" name="id" value="id" />
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" placeholder="Product" />
          <label htmlFor="price">Price</label>
          <input id="price" type="number" name="price" placeholder="$10.989" />
          <label htmlFor="stock">Stock</label>
          <input id="stock" type="number" name="stock" placeholder="4" />
          <label htmlFor="color">Color</label>
          <input id="color" type="text" name="color" placeholder="color" />
          <label htmlFor="size">Size</label>
          <textarea id="size" type="text" name="size" placeholder="50pcs" />
          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="Description" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
