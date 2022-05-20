// Loading animations, we render this and animate it as we do our API calls

import './Loader.scss';

const Loader = () => {

    return(

        <section className="loading-block">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h2>Loading, please wait.</h2>
        </section>
    );

}

export default Loader;