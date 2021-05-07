import './Banner.css';

export default function Banner({ completed }) {
    return (
        <section id="banner" className={completed < 5 ? "hide" : ""}>
            <h2>Nominations Complete!</h2>
        </section>
    )
}