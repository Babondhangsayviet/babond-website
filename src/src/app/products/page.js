'use client';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (searchTerm.trim()) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'sales':
      filtered.sort((a, b) => b.sales - a.sales);
      break;
    default:
      break;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '32px' }}>🛍️ Tất cả sản phẩm</h1>

      {/* Bộ lọc */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        marginBottom: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', color: '#6b7280', marginBottom: '6px' }}>🔍 Tìm kiếm</label>
          <input
            type="text"
            placeholder="Tên sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', color: '#6b7280', marginBottom: '6px' }}>📂 Danh mục</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              backgroundColor: 'white'
            }}
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', color: '#6b7280', marginBottom: '6px' }}>📊 Sắp xếp</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              backgroundColor: 'white'
            }}
          >
            <option value="default">Mặc định</option>
            <option value="price-asc">Giá tăng dần ↑</option>
            <option value="price-desc">Giá giảm dần ↓</option>
            <option value="sales">Bán chạy nhất</option>
          </select>
        </div>
      </div>

      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        Tìm thấy <strong style={{ color: '#15803d' }}>{filtered.length}</strong> sản phẩm
      </p>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: '#6b7280' }}>
          <span style={{ fontSize: '64px' }}>🔍</span>
          <h3 style={{ fontSize: '18px', marginTop: '16px', color: '#374151' }}>Không tìm thấy sản phẩm</h3>
          <p style={{ fontSize: '14px', marginTop: '8px' }}>Thử thay đổi từ khóa hoặc bộ lọc nhé</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
