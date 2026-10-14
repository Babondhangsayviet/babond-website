import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'BaBond — Hàng Sấy Việt | Thực phẩm sấy thiên nhiên',
  description: 'Sản phẩm thực phẩm sấy giòn không dầu, giữ trọn hương vị và dinh dưỡng từ nông sản Việt Nam. An toàn cho sức khỏe, yêu thích cho mọi nhà.',
  keywords: 'thực phẩm sấy, trái cây sấy, rau củ sấy, khoai tây sấy, chuối sấy, sầu riêng sấy, hàng sấy việt',
  openGraph: {
    title: 'BaBond — Hàng Sấy Việt',
    description: 'Thực phẩm sấy thiên nhiên, giữ trọn hương vị quê hương',
    type: 'website',
    locale: 'vi_VN',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'system-ui, -apple-system, sans-serif', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa'
      }}>
        <CartProvider>
          <Header />
          <main style={{ flexGrow: 1 }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
