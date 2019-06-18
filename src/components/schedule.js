import React, { Component } from 'react';
import '../assets/scss/schedule.scss';
import Button from './button';

const headers = [{
  empty: null,
  date: "Date",
  location: "Location",
  time: "Time",
  snack: "Snack",
  desc: "Description",
}];

const obj = [{
  empty: null,
  day: "Wed - 05.01.19",
  location: "NHS Cafe",
  time: "4:30 - 5:30pm",
  snack: "None",
  desc: "Journey 3",
},
{
  day: "Wed - 05.15.19",
  location: "NHS Cafe",
  time: "4:30 - 5:30pm",
  snack: "Anderson",
  desc: "CPR"
},
{
  day: "Fri - 05.24.19",
  location: "Prospect Hill Cemetery",
  time: "2:30 - 3:30pm",
  snack: "None",
  desc: "Flower Planting"
},
{
  day: "Sun - 05.26.19",
  location: " American Legion 21 Washington St.",
  time: "12:15",
  snack: "None",
  desc: "Memorial Parade"
},
{
  day: "Wed - 05.29.19",
  location: "NHS Cafe",
  time: "4:30 - 5:30pm",
  snack: "Troop",
  desc: "Journey 3"
},
{
  day: "Wed - 06.12.19",
  location: "NHS Cafe",
  time: "4:30 - 5:30pm",
  snack: "Troop",
  desc: "Journey 3"
},
{
  day: "Fri - 06.14.19",
  location: "VFW",
  time: "6-7 pm",
  snack: "Council",
  desc: "Bridging Ceremony"
},
{
  day: "TBD - June",
  location: "45 Polpis Road",
  time: "TBD",
  snack: "Troop",
  desc: "Camping"
}];

class Calendar extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show){
      visibleClass += " visibility";
    }

    const [,,,header] = this.props.header;
    const {rel, targBlank, schedule} = this.props.button;

    const thead = headers.map((header, index) =>
      <tr>
        <td key={header.empty}>{header.empty}</td>
        <td className="date" key={header.date}>{header.date}</td>
        <td className="location" key={header.location}>{header.location}</td>
        <td className="time" key={header.time}>{header.time}</td>
        <td className="snack" key={header.snack}>{header.snack}</td>
        <td  className="hidden" key={header.desc}>{header.desc}</td>
      </tr>
    );
    const row = obj.map((data) =>
      <tr>
        <td className="empty" key={data.empty}>{data.empty}</td>
        <td key={data.day}>{data.day}</td>
        <td key={data.location}>{data.location}</td>
        <td key={data.time}>{data.time}</td>
        <td key={data.snack}>{data.snack}</td>
        <td className="hidden" key={data.desc}>{data.desc}</td>
      </tr>
    );

    return (
      <section id="schedule" className="container">
          <div className={visibleClass}>
          <div id="frame-1">
            <div className="col-1 title">
              <h1>{header.schedule}</h1>
            </div>
            <div className="col-1 devider hidden">
              <hr/>
              <div className="label">
              <h3>{header.schedule}</h3>
              </div>
            </div>
            <table>
              <thead>{thead}</thead>
              <tbody>{row}</tbody>
            </table>
            <div className="col-1 question">
              <a className={schedule.nameClass}
                 rel={rel} href={schedule.href}
                 target={targBlank}
                 title={schedule.title}
                 alt={schedule.alt}>
              <Button text="Be a Volunteer" />
              </a>
           </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
