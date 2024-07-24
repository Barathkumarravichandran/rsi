import React, { useEffect, useState } from 'react';

const ServiceDetailsCounter2 = () => {
  const [counters, setCounters] = useState([
    { count: 100, currentValue: 0, label: 'Happy Clients' },
    { count: 250, currentValue: 0, label: 'Projects Done' },
    { count: 60, currentValue: 0, label: 'Expert People' },
    { count: 250, currentValue: 0, label: 'Portfolios' },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => ({
          ...counter,
          currentValue: counter.currentValue < counter.count ? counter.currentValue + 1 : counter.count,
        }))
      );
    }, );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="rs-service-details-counter">
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="rs-service-details-counter__item">
                <h3 className="title">
                  <span className="odometer">{counter.currentValue}</span>{' '}
                  <sub>{counter.count > 1000 ||counter.currentValue===100 ? 'k' : '+'}</sub>
                </h3>
                <span>{counter.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCounter2;
