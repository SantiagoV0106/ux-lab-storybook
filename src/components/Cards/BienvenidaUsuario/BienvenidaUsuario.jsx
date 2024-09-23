const LikeIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75981 2.25498L6.00052 6.01426C5.74945 6.26534 5.60695 6.61141 5.60695 6.97105V13.75C5.60695 14.4964 6.21767 15.1071 6.96409 15.1071H13.0712C13.6141 15.1071 14.1027 14.7814 14.3198 14.2861L16.532 9.12212C17.102 7.77855 16.118 6.28569 14.6591 6.28569H10.8252L11.4698 3.17784C11.5377 2.83855 11.4359 2.49248 11.1916 2.24819C10.7912 1.85462 10.1534 1.85462 9.75981 2.25498ZM2.89267 15.1071C3.63909 15.1071 4.24981 14.4964 4.24981 13.75V8.32141C4.24981 7.57498 3.63909 6.96426 2.89267 6.96426C2.14624 6.96426 1.53552 7.57498 1.53552 8.32141V13.75C1.53552 14.4964 2.14624 15.1071 2.89267 15.1071Z" fill="#0041A3" />
        </svg>


    )
}

export const BienvenidaUsuarios = () => {
    return (
        <article className="flex">

            <section className="bg-background-secondary rounded-lg flex flex-col gap-2 items-center p-4">
                <header>
                    <img src="" alt="" />
                </header>

                <div>
                    <img src="" alt="" />
                    <div>
                        <div>
                            <p>Hace una hora</p>
                            <h2>¡Ha llegado Diana Lora, bienvenida!</h2>
                        </div>
                        <p>Se une a trade marketing Cali, le damos la bienvenida a este equipo de alto rendimiento.</p>
                        <div>
                            <i><LikeIcon /> <span>Te gusta</span></i>
                        </div>
                    </div>
                </div>

            </section>
        </article>
    )
}