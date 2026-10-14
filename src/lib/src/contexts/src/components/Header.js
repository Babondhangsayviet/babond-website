'use client';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

export default function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ 
      backgroundColor: '#15803d', 
      color: 'white', 
      position: 'sticky', 
      top: 0, 
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '24px' }}>🌿</span>
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, lineHeight: 1.2 }}>BaBond</h1>
              <span style={{ fontSize: '11px', color: '#bbf7d0' }}>Hàng Sấy Việt</span>
            </div>
          </Link>

          <nav style={{ display: 'none', '@media(min-width:768px)': { display: 'flex' }, alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: '#dcfce7', textDecoration: 'none', fontSize: '15px' }}>Trang chủ</Link>
            <Link href="/products" style={{ color: '#dcfce7', textDecoration: 'none', fontSize: '15px' }}>Sản phẩm</Link>
            <a href="/#about" style={{ color: '#dcfce7', textDecoration: 'none', fontSize: '15px' }}>Về chúng tôi</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/cart" style={{ position: 'relative', color: 'white', textDecoration: 'none' }}>
              <span style={{ fontSize: '22px' }}>🛒</span>
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '11px',
                  minWidth: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '4px 8px'
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div style={{ paddingBottom: '16px', borderTop: '1px solid #166534' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '8px 0' }}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#dcfce7', textDecoration: 'none', padding: '10px 0' }}>🏠 Trang chủ</Link>
              <Link href="/products" onClick={() => setMobileMenuOpen(false)} style={{ color: '#dcfce7', textDecoration: 'none', padding: '10px 0' }}>🛍️ Tất cả sản phẩm</Link>
              <a href="/#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#dcfce7', textDecoration: 'none', padding: '10px 0' }}>🌿 Về chúng tôi</a>
              <Link href="/cart" onClick={() => setMobileMenuOpen(false)} style={{ color: '#dcfce7', textDecoration: 'none', padding: '10px 0' }}>🛒 Giỏ hàng ({totalItems})</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
