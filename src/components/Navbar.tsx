import { MyButton } from "./MyButton";

export const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div>
                        E-Market
                    </div>
                    <ul>
                        <li>Inicio</li>
                        <li>Promociones</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <MyButton size="sm">
                            Ingresar a la tienda
                        </MyButton>
                    </div>     
                </nav>
            </header>
        </>
    );
}