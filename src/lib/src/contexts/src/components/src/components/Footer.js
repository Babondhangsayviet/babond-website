import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f766e', color: 'white', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>🌿 BaBond</h3>
            <p style={{ color: '#99f6e4', lineHeight: 1.7, fontSize: '14px' }}>
              Chuyên cung cấp các sản phẩm thực phẩm sấy thiên nhiên từ nông sản Việt Nam. Không dầu chiên, không chất bảo quản.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Liên kết nhanh</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/" style={{ color: '#99f6e4', textDecoration: 'none', fontSize: '14px' }}>Trang chủ</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/products" style={{ color: '#99f6e4', textDecoration: 'none', fontSize: '14px' }}>Sản phẩm</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Chính sách</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#99f6e4', fontSize: '14px' }}>🚚 Giao hàng toàn quốc</span>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#99f6e4', fontSize: '14px' }}>🔄 Đổi trả trong 7 ngày</span>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#99f6e4', fontSize: '14px' }}>🛡️ Thanh toán an toàn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Liên hệ</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#99f6e4', fontSize: '14px', lineHeight: 1.8 }}>
              <li>📍 TP. Hồ Chí Minh, Việt Nam</li>
              <li>📧 ngocphi0509@gmail.com</li>
              <li>📞 09xxxxxxx</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #14b8a6', marginTop: '32px', paddingTop: '24px', textAlign: 'center', color: '#5eead4', fontSize: '13px' }}>
          <p>© 2026 BaBond — Hàng Sấy Việt. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
