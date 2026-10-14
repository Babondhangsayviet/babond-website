'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products, formatCurrency } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailPage({ params }) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) notFound();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 16px' }}>
      {/* Đường dẫn */}
      <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#16a34a', textDecoration: 'none' }}>Trang chủ</Link>
        {' / '}
        <Link href="/products" style={{ color: '#16a34a', textDecoration: 'none' }}>Sản phẩm</Link>
        {' / '}
        <span style={{ color: '#374151' }}>{product.name}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Hình ảnh */}
        <div style={{
          backgroundColor: '#f0fdf4',
          borderRadius: '12px',
          padding: '60px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '140px'
        }}>
          {product.image}
        </div>

        {/* Thông tin */}
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', lineHeight: 1.3 }}>
            {product.name}
          </h1>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#16a34a' }}>
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span style={{ fontSize: '18px', color: '#9ca3af', textDecoration: 'line-through' }}>
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4b5563', marginBottom: '28px' }}>
            {product.description}
          </p>

          {/* Tình trạng */}
          <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            {product.stock > 10 ? (
              <p style={{ color: '#16a34a', fontSize: '14px', margin: 0 }}>✅ <strong>Còn hàng</strong> — {product.stock} sản phẩm</p>
            ) : product.stock > 0 ? (
              <p style={{ color: '#f59e0b', fontSize: '14px', margin: 0 }}>⚠️ <strong>Sắp hết</strong> — Chỉ còn {product.stock} sản phẩm</p>
            ) : (
              <p style={{ color: '#ef4444', fontSize: '14px', margin: 0 }}>❌ <strong>Hết hàng</strong></p>
            )}
            <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '6px', margin: 0 }}>Đã bán: {product.sales} sản phẩm</p>
          </div>

          {/* Số lượng */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '10px', color: '#374151' }}>Số lượng</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #d1d5db',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  fontSize: '18px',
                  cursor: 'pointer',
                  color: '#374151'
                }}
              >−</button>
              <span style={{ fontSize: '16px', fontWeight: '600', minWidth: '50px', textAlign: 'center' }}>{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #d1d5db',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  fontSize: '18px',
                  cursor: 'pointer',
                  color: '#374151'
                }}
              >+</button>
            </div>
          </div>

          {/* Nút hành động */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              style={{
                flex: 1,
                minWidth: '180px',
                padding: '14px 24px',
                backgroundColor: added ? '#15803d' : '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                opacity: product.stock === 0 ? 0.5 : 1,
                transition: 'background-color 0.2s'
              }}
            >
              {added ? '✓ Đã thêm vào giỏ hàng!' : '🛒 Thêm vào giỏ hàng'}
            </button>
            <Link href="/cart">
              <button style={{
                padding: '14px 24px',
                backgroundColor: 'white',
                color: '#16a34a',
                border: '1px solid #16a34a',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0fdf4'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}>
                Xem giỏ hàng →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937' }}>Sản phẩm khác</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {products
            .filter(p => p.id !== product.id)
            .slice(0, 4)
            .map(p => (
              <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  padding: '16px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  <span style={{ fontSize: '40px' }}>{p.image}</span>
                  <h4 style={{ fontSize: '14px', fontWeight: '500', margin: '8px 0 4px' }}>{p.name}</h4>
                  <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#16a34a', margin: 0 }}>{formatCurrency(p.price)}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
