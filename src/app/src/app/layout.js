export const metadata = {
  title: 'BaBond — Hàng Sấy Việt',
  description: 'Thực phẩm sấy thiên nhiên, giữ trọn hương vị quê hương',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
