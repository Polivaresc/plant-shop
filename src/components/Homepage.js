import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
    return (
        <div>
            <div className="home-background"></div>
            <HomeCards/>
            <HomeReviews/>
        </div>
    )
}

const HomeCards = () => {
    return (
            <div className="home-cards">
                <article>
                    <h3>Fruit plants</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <p>Duis aute irure dolor in reprehe fugiat nulla pariatur. Excepteur sint non proident, sunt in culpa qui officia deseru est laborum.</p>
                </article>
                <article>
                    <h3>Decorative plants</h3>
                    <p>Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                </article>
                <article>
                    <h3>Aromatic plants</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu laborum.</p>
                    <p>Nam libero tempore, cum soluta nobis impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                </article>
            </div>
    )
}

const HomeReviews = () => {
    return (
            <div className="reviews">
                <div>
                    <div className="stars"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
                    <p>Nam libero tempore, quo minus id quod maxime, omnis voluptas assumenda est.</p>
                </div>
                <div>
                    <div className="stars"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
                    <p>Nam libero tempore, quo minus id quod maxime, omnis voluptas assumenda est.</p>
                </div>
                <div>
                    <div className="stars"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
                    <p>Nam libero tempore, quo minus id quod maxime, omnis voluptas assumenda est.</p>
                </div>
                <div>
                    <div className="stars"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
                    <p>Nam libero tempore, quo minus id quod maxime, omnis voluptas assumenda est.</p>
                </div>
                <div>
                    <div className="stars"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
                    <p>Nam libero tempore, quo minus id quod maxime, omnis voluptas assumenda est.</p>
                </div>
                <div>
                    <div className="stars"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
                    <p>Nam libero tempore, quo minus id quod maxime, omnis voluptas assumenda est.</p>
                </div>
            </div>
    )
}

export default Homepage;