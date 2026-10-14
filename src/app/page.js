'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function HomePage() {
  const featuredProducts = products.filter(p => 
    p.tags.includes('nổi bật') || p.tags.includes('bán chạy')
  ).slice(0, 4);
  
  const newProducts = products.filter(p => p.tags.includes('mới')).slice(0, 4);

  return (
    <div>
      {/* Banner chính */}
      <section style={{
        background: 'linear-gradient(135deg, #15803d 0%, #22c55e 100%)',
        color: 'white',
        padding: '60px 16px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 'bold', marginBottom: '16px' }}>
            Thực phẩm sấy thiên nhiên 🌿
          </h2>
          <p style={{ fontSize: 'clamp(15px, 3vw, 18px)', color: '#dcfce7', marginBottom: '32px', lineHeight: 1.7 }}>
            Giữ trọn hương vị quê hương — Không dầu chiên • Không chất bảo quản • 100% thiên nhiên
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products">
              <button style={{
                backgroundColor: 'white',
                color: '#15803d',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                🛒 Xem sản phẩm
              </button>
            </Link>
            <a href="#about">
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '14px 32px',
                fontSize: '16px',
                border: '2px solid white',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                Tìm hiểu thêm
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Ưu điểm */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {[
            { icon: '🌿', title: '100% Thiên nhiên', desc: 'Không hóa chất, không chất bảo quản' },
            { icon: '🔥', title: 'Sấy nhiệt độ thấp', desc: 'Giữ trọn vitamin & dưỡng chất' },
            { icon: '🚚', title: 'Giao hàng nhanh', desc: 'Toàn quốc trong 2-5 ngày' },
            { icon: '💯', title: 'Đổi trả dễ dàng', desc: 'Hoàn tiền nếu không hài lòng' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '24px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <span style={{ fontSize: '40px' }}>{item.icon}</span>
              <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '12px 0 8px', color: '#1f2937' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>⭐ Sản phẩm nổi bật</h2>
          <Link href="/products" style={{ color: '#16a34a', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
            Xem tất cả →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Sản phẩm mới */}
      {newProducts.length > 0 && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px 64px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '32px' }}>🆕 Sản phẩm mới</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Về chúng tôi */}
      <section id="about" style={{ backgroundColor: '#f0fdf4', padding: '64px 16px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#15803d', marginBottom: '24px' }}>Về BaBond — Hàng Sấy Việt</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#374151', marginBottom: '16px' }}>
            Chúng tôi tự hào mang đến những sản phẩm thực phẩm sấy chất lượng nhất từ nông sản Việt Nam. Với công nghệ sấy hiện đại ở nhiệt độ thấp, sản phẩm giữ được hương vị nguyên bản và giá trị dinh dưỡng cao, không cần thêm chất bảo quản hay dầu chiên.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#374151' }}>
            Mỗi sản phẩm đều được tuyển chọn kỹ lưỡng từ nguồn nông sản an toàn, giúp bạn có những món ăn vặt ngon miệng và bổ dưỡng mỗi ngày. 💚
          </p>
        </div>
      </section>
    </div>
  );
}
