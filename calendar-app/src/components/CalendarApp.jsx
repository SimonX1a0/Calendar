const CalendarApp = () => {
  return (
    <>
        <div className="calendar-app">
            <div className="calendar">
                <h1 className="heading">Calendar</h1>
                <div className="navigate-date">
                    <h2 className="month">May</h2>
                    <h2 className="year">2025</h2>
                    <div className="buttons">
                        <i className="bx bx-chevron-left"></i>
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </div>
                <div className="weekdays">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
                <div className="days">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                    <span>06</span>
                    <span>07</span>
                    <span>08</span>
                    <span>09</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                    <span>17</span>
                    <span>18</span>
                    <span>19</span>
                    <span>20</span>
                    <span>21</span>
                    <span>22</span>
                    <span>23</span>
                    <span>24</span>
                    <span>25</span>
                    <span>26</span>
                    <span>27</span>
                    <span>28</span>
                    <span>29</span>
                    <span>30</span>
                    <span>31</span>
                </div>
            </div>
            <div className="events">
                <div className="event-popup">
                    <div className="time-input">
                        <div className="event-popup-time">Time</div>
                        <input type="number" name="hours" min={0} max={24} className="hours"/>
                        <input type="number" name="minutes" min={0} max={59} className="minutes"/>
                    </div>
                    <textarea placeholder="Enter Event Text" name="" id=""></textarea>
                    <button className="event-popup=btn">Add Event</button>
                    <button className="close-event-popup"><i className="bx bx-x"></i></button>
                </div>
                <div className="event">
                    <div className="event-date-wrapper">
                        <div className="event-date">May 15, 2025</div>
                        <div className="event-time">10:00</div>
                    </div>
                    <div className="event-text">Meeting with Simon</div>
                    <div className="event-buttons">
                        <i className="bx bxs-edit-alt"></i>
                        <i className="bx bxs-message-alt-x"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CalendarApp