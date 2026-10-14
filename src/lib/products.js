export const products = [
  {
    id: 1,
    name: "Khoai tây sấy giòn",
    price: 45000,
    originalPrice: 55000,
    image: "🥔",
    category: "rau-say",
    description: "Khoai tây sấy giòn không dầu, giữ trọn hương vị tự nhiên và dinh dưỡng. Không chất bảo quản, an toàn cho sức khỏe cả gia đình.",
    stock: 100,
    sales: 156,
    tags: ["bán chạy", "khuyến mãi"]
  },
  {
    id: 2,
    name: "Chuối sấy thiên nhiên",
    price: 35000,
    originalPrice: 40000,
    image: "🍌",
    category: "trai-cay-say",
    description: "Chuối sấy giòn tan, ngọt tự nhiên không thêm đường. Giữ trọn hàm lượng kali và vitamin tự nhiên.",
    stock: 80,
    sales: 234,
    tags: ["bán chạy"]
  },
  {
    id: 3,
    name: "Sầu riêng sấy nguyên chất",
    price: 85000,
    originalPrice: 95000,
    image: "🥭",
    category: "trai-cay-say",
    description: "Sầu riêng sấy nguyên chất, hương vị đậm đà, không thêm hương liệu. Được tuyển chọn từ sầu riêng Việt Nam chất lượng cao.",
    stock: 50,
    sales: 89,
    tags: ["nổi bật"]
  },
  {
    id: 4,
    name: "Khoai lang sấy giòn",
    price: 38000,
    originalPrice: 45000,
    image: "🍠",
    category: "rau-say",
    description: "Khoai lang sấy giòn, vị ngọt tự nhiên, giàu chất xơ và vitamin A. Đồ ăn vặt lành mạnh cho mọi lứa tuổi.",
    stock: 120,
    sales: 178,
    tags: ["mới"]
  },
  {
    id: 5,
    name: "Măng cụt sấy",
    price: 92000,
    originalPrice: 105000,
    image: "🍈",
    category: "trai-cay-say",
    description: "Măng cụt sấy nguyên quả, giữ trọn vị chua ngọt đặc trưng của măng cụt Việt Nam. Hạn chế số lượng theo mùa.",
    stock: 35,
    sales: 67,
    tags: ["nổi bật"]
  },
  {
    id: 6,
    name: "Dứa sấy giòn",
    price: 42000,
    originalPrice: 50000,
    image: "🍍",
    category: "trai-cay-say",
    description: "Dứa sấy giòn tan, chua ngọt hài hòa, không thêm chất bảo quản. Giàu vitamin C và enzyme tự nhiên.",
    stock: 90,
    sales: 145,
    tags: ["khuyến mãi"]
  }
];

export const categories = [
  { id: "all", name: "Tất cả sản phẩm" },
  { id: "trai-cay-say", name: "🍎 Trái cây sấy" },
  { id: "rau-say", name: "🥦 Rau củ sấy" }
];

export function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

export function calculateDiscount(originalPrice, price) {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
