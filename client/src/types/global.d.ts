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

interface UserEmail {
  email: string | null;
}

interface UserContextType {
  userEmail: UserEmail;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  logout: () => void;
  isLoggedIn: boolean;
}

interface UserProviderProps {
  children: ReactNode;
}

interface Order {
  id: number;
  item: string;
  quantity: number;
  price: number;
}

interface UserData {
  name: string;
  age: number;
  email: string;
  mobile: string;
  address: string;
}