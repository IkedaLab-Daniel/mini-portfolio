import data from '../data.json'
import reactSVG from '../assets/react.svg'
import pythonSVG from '../assets/python.svg'
import figmaSVG from '../assets/figma.svg'
import sqlSVG from '../assets/sqlSVG.svg'
import djangoSVG from '../assets/django.svg'
import sassSVG from '../assets/sass.svg'
import htmlSVG from '../assets/html.svg'
import css3SVG from '../assets/css3.svg'
import jsSVG from '../assets/js.svg'



function StudyCards() {
   
    const iconMap = {
        react: reactSVG,
        python: pythonSVG,
        figma: figmaSVG,
        sql: sqlSVG,
        django: djangoSVG,
        sass: sassSVG,
        html: htmlSVG,
        css3: css3SVG,
        js: jsSVG
    }

    return (
        <div id="studycards">
            {data.map((item, index) => (
                <div key={index} className="card">
                    <h3>Day {item.day}</h3>
                    <p className='date'>{item.date}</p>
                    <p className='time'>{item.timeSpent}</p>
                    <div className="icons">
                        {Array.isArray(item.icons) ? (
                            item.icons.map((icon, i) =>
                                iconMap[icon] ? (
                                    <img key={i} src={iconMap[icon]} alt={icon} />
                                ) : (
                                    <p key={i}>Icon not found</p>
                                )
                            )
                        ) : (
                            iconMap[item.icons] ? (
                                <img src={iconMap[item.icons]} alt={item.icons} />
                            ) : (
                                <p>Icon not found</p>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StudyCards