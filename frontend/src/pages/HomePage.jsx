import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';
import NavBar from '../components/Navbar';

const HomePage = () => {

    useEffect(() => {
        let slideIndex = 0;
        const slides = document.getElementsByClassName("mySlides");
        const showSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 10000);
        };
        showSlides();
    }, []);

    return (
        <>
            <NavBar isHomePage={true} />
            <main>
                <section className="slideshow-container">
                    <article className="mySlides fade">
                        <img src="avenida.png" alt="slide 1" className="carousel-image" />
                        <Link to="/inscripcion" className="carousel-button">Ir a Página 1</Link>
                    </article>
                    <article className="mySlides fade">
                        <img src="https://via.placeholder.com/1920x600" alt="slide 2" className="carousel-image" />
                        <Link to="/inscripcion" className="carousel-button">Ir a Página 2</Link>
                    </article>
                    <article className="mySlides fade">
                        <img src="https://via.placeholder.com/1920x600" alt="slide 3" className="carousel-image" />
                        <Link to="/inscripcion" className="carousel-button">Ir a Página 3</Link>
                    </article>
                </section>
            </main>
        </>
    );
};

export default HomePage;