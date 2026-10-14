'use client';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency, calculateDiscount } from '@/lib/products';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = calculateDiscount(product.originalPrice, product.price);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
    }}>
      
      <div style={{
        height: '160px',
        backgroundColor: '#f0fdf4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '64px',
        position: 'relative'
      }}>
        {discount > 0 && (
          <span style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: '#ef4444',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '4px 8px',
            borderRadius: '4px'
          }}>
            -{discount}%
          </span>
        )}
        {product.stock < 10 && product.stock > 0 && (
          <span style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: '#f59e0b',
            color: 'white',
            fontSize: '11px',
            padding: '4px 8px',
            borderRadius: '4px'
          }}>
            Chỉ {product.stock} hộp
          </span>
        )}
        {product.image}
      </div>

      <div style={{ padding: '16px' }}>
        <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', margin: '0 0 8px 0' }}>
            {product.name}
          </h3>
        </Link>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#16a34a' }}>
            {formatCurrency(product.price)}
          </span>
          {discount > 0 && (
            <span style={{ fontSize: '13px', color: '#9ca3af', textDecoration: 'line-through' }}>
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <Link href={`/products/${product.id}`} style={{ flex: 1 }}>
            <button style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #16a34a',
              backgroundColor: 'transparent',
              color: '#16a34a',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}>
              Xem chi tiết
            </button>
          </Link>
          <button
            onClick={() => addToCart(product)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#16a34a',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#15803d';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#16a34a';
            }}>
            + 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
