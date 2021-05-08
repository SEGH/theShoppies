import './Banner.css';

export default function Banner({ completed, message }) {
    return (
        <section id="banner" className={completed < 5 ? "hide" : ""}>
            <h2>Nominations Complete!</h2>
            {message && <h6>{message}</h6>}
        </section>
    )
}