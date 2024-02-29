import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Home/Landing";
import SideBarSocial from "./components/SidebarSocial/SideBarSocial";
import { Footer } from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
import { Routes, Route, useLocation } from "react-router-dom";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Dashboard from "./components/Admin/Dashboard";
import Login from "./components/Auth/Login";
import Cart from "./components/Cart/Cart";
import { AuthProvider } from "./context/AuthContext";
import Register from "./components/Auth/Register";
import PanelUsuario from "./components/User/PanelUsuario";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { ProtectedAdmin } from "./components/ProtectedRoute/ProtectedAdmin";
import UsersView from "./components/Admin/UsersView";

function App() {
	const { pathname } = useLocation();

	return (
		<AuthProvider>
			<main className="min-h-screen font-montserrat">
				{pathname !== "/create" &&
					pathname !== "/admin" &&
					pathname !== "/login" && <Header />}

				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/producto/:id" element={<ProductDetail />} />
					<Route path="/productos" element={<ProductList />} />
					<Route
						path="/create"
						element={
							<ProtectedAdmin>
								<CreateProduct />
							</ProtectedAdmin>
						}
					/>
					<Route
						path="/admin"
						element={
							<ProtectedAdmin>
								<Dashboard />
							</ProtectedAdmin>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/users"
						element={
							<ProtectedAdmin>
								<UsersView />
							</ProtectedAdmin>
						}
					/>
					<Route path="/carrito" element={<Cart />} />
					<Route
						path="/usuario/panel-control"
						element={
							<ProtectedRoute>
								{" "}
								<PanelUsuario />{" "}
							</ProtectedRoute>
						}
					/>
					<Route
						path="/usuario/datos-personales"
						element={
							<ProtectedRoute>
								<PanelUsuario />{" "}
							</ProtectedRoute>
						}
					/>
					<Route
						path="/usuario/pedidos"
						element={
							<ProtectedRoute>
								<PanelUsuario />
							</ProtectedRoute>
						}
					/>
				</Routes>
				{pathname !== "/create" && <SideBarSocial />}
				{pathname !== "/create" && pathname !== "/login" && pathname !== "/admin" && <Footer />}
			</main>
		</AuthProvider>
	);
}

export default App;
