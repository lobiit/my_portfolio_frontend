import React, {useEffect, useState} from 'react';
import './Work.scss';
import { motion } from "framer-motion";
import {client, urlFor} from "../../client";

const Work = (props) => {
    const [activeFilter, setActiveFilter]=useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    useEffect(() => {
        const query = `[_type == 'works']`;

        client.fetch(query)
            .then((data) => {
                setWorks(data);
                setFilterWork(data);
            })
    }, [])
    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };
    return (
      <>
          <h2 className="head-text">
              My Creative
              <span> Portfolio</span>
              Section
          </h2>
          <div className="app__work-filter">
              {['Web App', 'React Js', 'Django', 'All'].map((item, index) =>(
                  <div
                    key={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item? 'item-active': ''}`}
                  >
                      {item}
                  </div>
              ))}
          </div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5}}
            className="app__work-portfolio"
          >
              {filterWork.map((work, index) => (
                  <div className="app__work-item app__flex" key={index}>
                    <div className="app__work-img app__flex">
                        <img src={urlFor(work.imgUrl)} alt={work.name}/>
                    </div>
                  </div>
              ))}
          </motion.div>
      </>
    );
};

export default Work;
