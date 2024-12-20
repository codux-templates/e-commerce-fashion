import styles from './tagged-products-section.module.scss'
import { ProductsSpotlight } from '~/src/components/products-spotlight/products-spotlight';
export const TaggedProductsSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={"subheading"}>Sale is on</div>
        <h3 className={"uppercase"}>Don’t miss our last catches</h3>
      </div>
      <div className={styles.content}>
        <ProductsSpotlight spotlights={[{ x: 0.57, y: 0.28,   productId: '123',   productName: 'Earrings',   price: '$9.00' },{x: 0.4, y: 0.6, productId: '123', productName: 'Woman’s T-shirt', price: '$14.00'}]} imagePosition={"top"} imageUrl={"https://s3-alpha-sig.figma.com/img/97ab/b5f7/0e228a0f121297eada19e8519cd7c75e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ae0goRyAtOj6jv4CIU2bjZQw0A9aOB09c1MqLyUec~ew8xt4aPp-Kmmd--Qv7DmX~raRMtFW~QC6gZgZ1gDxYDaZtevMZdHv3XDUWQI-VTIw9ka~FIZXyTaZQz-4Rpyn7a5XdnEnhSWq5C2HzYdHY1Xm6YGeeKzmfQNIav80mP0SYSg9jrbciwKaShu6BZODNrgfJ0Fpo~8SdRvY~HjJjVJLZ09ON97jliapOgMqApclMsDake2Uazs2xzJ7Ttnv-65R6snVzw0AhZowDUc1eaz0nrLJF4DMURgQxOCVu85SuidVrVOLPecWnO1tJQYzyUKI~ewy3RJYyauXuQwvbA__"}/>
        <ProductsSpotlight spotlights={[{ x: 0.57, y: 0.20,   productId: '123',   productName: 'Beanie',   price: '$11.00' },{x: 0.4, y: 0.8, productId: '123', productName: 'Man’s T-shirt', price: '$14.00'}]} imageUrl={"https://s3-alpha-sig.figma.com/img/66a0/3109/9a9999cd3f47e2952e55fc45ae9f75b5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=buAoklPQfelMqL8o5Cpyn3gp8yIum5R75YPaEG2FUy5nHfhJUlr~g61jxCTuGPnTViHfHgpvu19PVwQAYHpdkydPfd9cOIZNWXl11PwfSePGnXXHoD-gC9hK~Cnsd4DSgOdJWuDDyKbRyO0sZzQzX~7UTduAPiiCzOIMJdaqRXJOXspd8z3X8kGe1snvyAl0fNbtqrh1z~2hYy1YW~8ytoaOS4Aa4U0T2RZsHMGA7f1-x1yiWZNUr6ALj0uK3rNXe8UJ5cUJobolozWQZ5Prp55T4jM4-pzTYK-AACZm-u3yC4XayA74Gm5~sIULuVrT4f3KxPEC03ZbWkH9Q3HDtQ__"}/>
      </div>
    </div>
  )
}
