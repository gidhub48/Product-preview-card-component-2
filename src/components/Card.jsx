import "./Card.css"

function Card() {
    return (
        <main className="Card">
            <section className="CardImg">
                <picture>
                    <source media="(min-width:647px)" srcSet={process.env.PUBLIC_URL + "/images/image-product-desktop.jpg"} alt="product desktop"/>
                    <img src={process.env.PUBLIC_URL + "/images/image-product-mobile.jpg"} alt="product"/>
                </picture>
            </section>
            <section className="CardProduct">
                <h5 className="clrDGB">PERFUME</h5>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p className="clrDGB">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className="CardProduct-price"><h1>$149.99</h1><h5 className="fw500 clrDGB">$169.99</h5></div>
                <button className="Card-AddCard fw700">
                    <img src={process.env.PUBLIC_URL + "/images/icon-cart.svg"} alt="icon-cart" className="icon"/> 
                    Add to Cart
                </button>
            </section>
        </main>
    )
}

export default Card;