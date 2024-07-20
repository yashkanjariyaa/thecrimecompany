interface ApparelData {
  apparelType: string;
  size: string;
  color: string;
  printType: string;
  designPosition: string;
  designFile: File | null;
  apparelName: string;
}

interface Product {
  _id: string;
  productId: number;
  url: string;
  name: string;
  price: number;
  discountBool: boolean;
  discountPrice: number;
  color: string;
  printType: string;
  description: string;
  collection: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface User {
  email: string | null;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}
