import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon6 from '../../images/svg-6.svg'


export const ServicesSection = () => {


    return (
        <>
            <div className="services-container" id='services'>
                <h1 id="services-h1">Our Services</h1>

                <div id="services-wrapper">

                    <div className="services-card">
                        <img src={Icon1} alt='car' className="services-icon" />
                        <h2 className='services-h2'>Indepth Communication</h2>
                        <p className='services-p'>Helping you find the perfect place for your needs!</p>
                    </div>

                    <div className="services-card">
                        <img src={Icon6} alt='car' className="services-icon" />
                        <h2 className='services-h2'>Reaching out with friends</h2>
                        <p className='services-p'>Chat with your friends through our feed!</p>
                    </div>

                    <div className="services-card">
                        <img src={Icon2} alt='car' className="services-icon" />
                        <h2 className='services-h2'>The Adventurers Media</h2>
                        <p className='services-p'>Share your experience with TRVL!</p>
                    </div>

                </div>
            </div>
        </>
    )
}