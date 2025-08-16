import { useState } from 'react';

import cardSVG from '../assets/card2.svg';
import stickSVG from '../assets/stick.svg';
import data from '../data.json';
import reactSVG from '../assets/react.svg';
import pythonSVG from '../assets/python.svg';
import figmaSVG from '../assets/figma.svg';
import sqlSVG from '../assets/sqlSVG.svg';
import djangoSVG from '../assets/django.svg';
import sassSVG from '../assets/sass.svg';
import htmlSVG from '../assets/html.svg';
import css3SVG from '../assets/css3.svg';
import jsSVG from '../assets/js.svg';
import mysqlSVG from '../assets/mysql.png';
import gitSVG from '../assets/git.svg';
import phpSVG from '../assets/php.svg';
import viteSVG from '../assets/vite.svg';
import downSVG from '../assets/down2.svg';
import upSVG from '../assets/up.svg'
import expressSVG from '../assets/express.webp'
import nodeSVG from '../assets/nodeSVG.svg'
import mongodbSVG from '../assets/mongodb.svg'
import githubSVG from '../assets/github.svg'
import reduxSVG from '../assets/redux.svg'
import dockerSVG from '../assets/docker.png'
import flaskSVG from '../assets/flask-light.svg'
import postgresqlSVG from '../assets/postgresql.svg'
import bootstrapSVG from '../assets/bootstrap.svg'
import kubernetesSVG from '../assets/kubernetes.svg'
import aiSVG from '../assets/ai.svg'
import terminalSVG from '../assets/terminal.svg'
import securitySVG from '../assets/security.svg'
import laravelSVG from '../assets/laravel.svg'
import tailwindSVG from '../assets/tailwind.svg'
function StudyCards() {
    const [toggleStudyCard, setToggleStudyCard] = useState(true);
    const [showAll, setShowAll] = useState(false);

    const handleToggleStudyCard = (styling) => {
        if (styling === 'card') {
            setToggleStudyCard(true);
        } else {
            setToggleStudyCard(false);
        }
    };

    const iconMap = {
        react: reactSVG,
        python: pythonSVG,
        figma: figmaSVG,
        sql: sqlSVG,
        django: djangoSVG,
        sass: sassSVG,
        html: htmlSVG,
        css3: css3SVG,
        js: jsSVG,
        mysql: mysqlSVG,
        git: gitSVG,
        php: phpSVG,
        vite: viteSVG,
        node: nodeSVG,
        express: expressSVG,
        mongodb: mongodbSVG,
        github: githubSVG,
        redux: reduxSVG,
        docker: dockerSVG,
        flask: flaskSVG,
        postgresql: postgresqlSVG,
        bootstrap: bootstrapSVG,
        kubernetes: kubernetesSVG,
        ai: aiSVG,
        terminal: terminalSVG,
        security: securitySVG,
        laravel: laravelSVG,
        tailwind: tailwindSVG
    };

    // Determine the data to display (first 10 or all)
    const displayedData = showAll ? data : data.slice(0, 10);

    return (
        <>
            <div className="view-container">
                <div className="cool-btn" onClick={() => handleToggleStudyCard('card')}>
                    <img src={cardSVG} alt="" />
                </div>
                <div className="cool-btn" onClick={() => handleToggleStudyCard('stick')}>
                    <img src={stickSVG} alt="" />
                </div>
            </div>

            <div id="studycards">
                {displayedData.map((item, index) => (
                    <div key={index} className={toggleStudyCard ? 'card' : 'stick'}>
                        <h3>Day {item.day}</h3>
                        <p className="date">{item.date}</p>
                        <p className="time">{item.timeSpent}</p>
                        <p className="time-caption">HH : MM</p>
                        <div className="icons">
                            {Array.isArray(item.icons) ? (
                                item.icons.map((icon, i) =>
                                    iconMap[icon] ? (
                                        <img className="icon-img" key={i} src={iconMap[icon]} alt={icon} />
                                    ) : (
                                        <p key={i}>Icon not found</p>
                                    )
                                )
                            ) : (
                                iconMap[item.icons] ? (
                                    <img className="icon-img" src={iconMap[item.icons]} alt={item.icons} />
                                ) : (
                                    <p>Icon not found</p>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="see-all-container cool-btn" onClick={showAll ? (() => setShowAll(false)) : (() => setShowAll(true))}>
                {!showAll ? (
                    <>
                        <img src={downSVG} alt="" />
                        <span className="see-all-btn">
                            See All
                        </span>
                    </>
                ) : (
                    <>
                        <img src={upSVG} alt="" />
                        <span className="see-all-btn">
                            Hide
                        </span>
                    </>
                )}
            </div>
        </>
    );
}

export default StudyCards;