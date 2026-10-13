'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-50">
      <header className="bg-green-700 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-2xl font-bold">🌿 BaBond — Hàng Sấy Việt</h1>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-green-200">Trang chủ</Link>
            <Link href="/gio-hang" className="hover:text-green-200">Giỏ hàng</Link>
            <Link href="/lien-he" className="hover:text-green-200">Liên hệ</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Thực phẩm sấy thiên nhiên</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Sản phẩm sấy giòn không dầu, giữ trọn hương vị và dinh dưỡng. An toàn cho sức khỏe, yêu thích cho mọi nhà.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700">
          Xem sản phẩm
        </button>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-2xl font-bold text-center text-green-800 mb-10">Sản phẩm nổi bật</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { ten: "Khoai tây sấy giòn", gia: "45.000đ", hinh: "🥔" },
            { ten: "Chuối sấy thiên nhiên", gia: "35.000đ", hinh: "🍌" },
            { ten: "Sầu riêng sấy", gia: "85.000đ", hinh: "🥭" },
          ].map((sp, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">{sp.hinh}</div>
              <h4 className="font-bold text-lg mb-2">{sp.ten}</h4>
              <p className="text-green-600 font-medium mb-4">{sp.gia}</p>
              <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200">
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-green-800 text-white py-10 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xl font-bold mb-2">🌿 BaBond — Hàng Sấy Việt</p>
          <p className="text-green-200 mb-2">Giữ trọn hương vị quê hương</p>
          <p className="text-sm text-green-300">📧 Email: ngocphi0509@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}
