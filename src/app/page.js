import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f0fdf4' }}>
      <header style={{ backgroundColor: '#15803d', color: 'white', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>🌿 BaBond — Hàng Sấy Việt</h1>
          <nav style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
            <Link href="/" style={{ color: '#dcfce7', textDecoration: 'none' }}>Trang chủ</Link>
            <Link href="/gio-hang" style={{ color: '#dcfce7', textDecoration: 'none' }}>Giỏ hàng</Link>
            <Link href="/lien-he" style={{ color: '#dcfce7', textDecoration: 'none' }}>Liên hệ</Link>
          </nav>
        </div>
      </header>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', color: '#166534', marginBottom: '24px' }}>Thực phẩm sấy thiên nhiên</h2>
        <p style={{ fontSize: '18px', color: '#374151', maxWidth: '672px', margin: '0 auto 32px' }}>
          Sản phẩm sấy giòn không dầu, giữ trọn hương vị và dinh dưỡng. An toàn cho sức khỏe, yêu thích cho mọi nhà.
        </p>
        <button style={{ backgroundColor: '#16a34a', color: 'white', padding: '12px 32px', fontSize: '18px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
          Xem sản phẩm
        </button>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 48px' }}>
        <h3 style={{ fontSize: '24px', color: '#166534', textAlign: 'center', marginBottom: '40px' }}>Sản phẩm nổi bật</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {[
            { ten: "Khoai tây sấy giòn", gia: "45.000đ", hinh: "🥔" },
            { ten: "Chuối sấy thiên nhiên", gia: "35.000đ", hinh: "🍌" },
            { ten: "Sầu riêng sấy", gia: "85.000đ", hinh: "🥭" },
          ].map((sp, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{sp.hinh}</div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{sp.ten}</h4>
              <p style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '16px' }}>{sp.gia}</p>
              <button style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ backgroundColor: '#15803d', color: 'white', padding: '40px 24px', marginTop: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>🌿 BaBond — Hàng Sấy Việt</p>
          <p style={{ color: '#bbf7d0', marginBottom: '8px' }}>Giữ trọn hương vị quê hương</p>
          <p style={{ fontSize: '14px', color: '#86efac' }}>📧 Email: ngocphi0509@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}
