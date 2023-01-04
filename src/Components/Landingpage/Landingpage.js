import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Landingpage.css";
import main_img from "../../assets/img/main_img.jpg";
import Calendar from "react-calendar";
import Button from "@mui/material/Button";
import hotel_int_1 from "../../assets/img/hotel_int_1.jpg";
import hotel_int_2 from "../../assets/img/hotel_int_2.jpg";
import hotel_int_3 from "../../assets/img/hotel_int_3.jpg";
import hotel_int_4 from "../../assets/img/hotel_int_4.jpg";
import hotel_int_5 from "../../assets/img/hotel_int_5.jpg";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Footer from "../Footer/Footer";

function Landingpage() {
  const [roomState, setRoomState] = useState(0);
  const [adultState, setAdultState] = useState(0);
  const [childState, setChildState] = useState(0);

  const roomCounterDec = () => {
    if (roomState > 0) {
      setRoomState(roomState - 1);
    }
  };
  const roomCounterInc = () => {
    setRoomState(roomState + 1);
  };
  const adultCounterDec = () => {
    if (adultState > 0) {
      setAdultState(adultState - 1);
    }
  };
  const adultCounterInc = () => {
    if ((adultState + childState) < (3 * roomState)) {
      setAdultState(adultState + 1);
    }
  };
  const childCounterDec = () => {
    if (childState > 0) {
      setChildState(childState - 1);
    }
  };
  const childCounterInc = () => {
    if ((adultState + childState) < (3 * roomState)) {
      setChildState(childState + 1);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="landing_main">
        <div className="section_1_P">
          <div className="main_img_P">
            <img className="main_img" src={main_img} alt="main_img" />
          </div>
          <div className="input_submit_P">
            <div className="input_P">
              <div className="inputField_1">
                <input
                  type="date"
                  placeholder="Check IN- &nbsp;&nbsp;"
                  onchange="this.className=(this.value!=''?'has-value':'')"
                />
              </div>
              <div className="inputField_2">
                <input
                  type="date"
                  placeholder="Check OUT- &nbsp;&nbsp;"
                  onchange="this.className=(this.value!=''?'has-value':'')"
                />
              </div>
              <div className="inputField_3">
                <div class="input-group mb-3 inputField_3_child">
                  <div className="optionsSelected_display">
                    <span>Room: {roomState} - Adult: {adultState} - Child: {childState}</span>
                  </div>
                  <button
                    class="btn btn-warning dropdown-toggle"
                    type="button"
                    id="dropdownMenuClickable"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="false"
                    aria-expanded="false"
                  ></button>
                  <ul
                    class="dropdown-menu  dropdown-menu-end"
                    aria-labelledby="dropdownMenuClickable"
                  >
                    <p style={{ fontSize: "0.77rem", marginLeft: "2rem", color:'red' }}>
                      Maximum 3 Guests per room
                    </p>
                    <div className="dropdownOption">
                      <div className="dropdownOption_1">
                        <div>
                          <p>Rooms</p>
                        </div>
                        <div className="dropdown_slider">
                          <button onClick={roomCounterDec}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dash-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                            </svg>
                          </button>

                          <span> &nbsp;{roomState}&nbsp;&nbsp;</span>
                          <button onClick={roomCounterInc}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-plus-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="dropdownOption_1">
                        <div>
                          <p>Adults</p>
                        </div>
                        <div className="dropdown_slider">
                          <button onClick={adultCounterDec}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dash-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                            </svg>
                          </button>

                          <span> &nbsp;{adultState}&nbsp;&nbsp;</span>
                          <button onClick={adultCounterInc}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                          </button>
                          
                        </div>
                      </div>
                      <div className="dropdownOption_1">
                        <div>
                          <p>Children</p>
                        </div>
                        <div className="dropdown_slider">
                          <button onClick={childCounterDec}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-dash-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                          </svg>
                          </button>
                          
                          <span> &nbsp;{childState}&nbsp;&nbsp;</span>
                          <button onClick={childCounterInc}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="submitBtn">
              <Button
                style={{
                  backgroundColor: "rgb(255,209,24)",
                  fontFamily: "cursive",
                  color: "#000",
                }}
                variant="contained"
              >
                SEARCH
              </Button>
            </div>
          </div>
        </div>

        <div className="section_2_P">
          <div className="gallery_P">
            <div className="gallery_item gallery_item_1">
              <img src={hotel_int_1} alt="hotel_int_1" />
            </div>
            <div className="gallery_item">
              <img src={hotel_int_2} alt="hotel_int_2" />
            </div>
            <div className="gallery_item">
              <img src={hotel_int_3} alt="hotel_int_3" />
            </div>
            <div className="gallery_item">
              <img src={hotel_int_4} alt="hotel_int_4" />
            </div>
            <div className="gallery_item">
              <img src={hotel_int_5} alt="hotel_int_5" />
            </div>
          </div>
          <div className="address_P">
            <div className="address_row1">
              <div className="address_row1_section1">
                <h4> Hotel Octave Maldives | Red Bull Groups</h4>
                <h6>Kaaminee Magu,Janbuma, Male, Maldives 20242, Maldives</h6>
                <p> +960-1234567890, 9087654321</p>
                <div className="perks_P">
                  <div className="perks">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-diamond"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                    </svg>
                    <p className="perks_content">ATM</p>
                  </div>
                  <div className="perks">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-diamond"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                    </svg>
                    <p className="perks_content">Free Parking</p>
                  </div>
                  <div className="perks">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-diamond"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                    </svg>
                    <p className="perks_content">Conference Room</p>
                  </div>
                  <div className="perks">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-diamond"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                    </svg>
                    <p className="perks_content">Free Parking</p>
                  </div>
                  <div className="perks">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-diamond"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                    </svg>
                    <p className="perks_content">Free Parking</p>
                  </div>
                </div>
              </div>
              <div className="address_row1_section2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1280.8768161654666!2d73.50677658978216!3d4.174387778971582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7e546933c6bb%3A0xbc7b188e2b689896!2sHotel%20Octave%20Maldives!5e0!3m2!1sen!2sin!4v1672824549177!5m2!1sen!2sin"
                  width="200"
                  height="200"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="address_row2">
              <p>
                Set on a side street off Malé's Shaariu Varudhee Majeedhee Magu
                thoroughfare, this unassuming budget hotel is a 6-minute walk
                from the National Museum and 1 km from the island's main beach.
                It is 4 km (by road and ferry) from Ibrahim Nasir International
                Airport. Unpretentious rooms with en suite bathrooms come with
                flat-screen TVs, free Wi-Fi and minifridges, as well as safes,
                and tea and coffeemaking facilities. Suites add living rooms and
                kitchenettes. Room service is available. There's a casual
                restaurant. Business services are available, plus there's a
                complimentary airport shuttle.
              </p>
            </div>
          </div>
        </div>

        <div className="section_3_P">
          <div className="section_3_heading">
            <h4>Property Rules</h4>
            <h6>Check In: 12PM Check Out:12PM </h6>
          </div>
          <div className="section_3_points">
            <div className="section_3_points_child1">
              <ul>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
              </ul>
            </div>
            <div className="section_3_points_child2">
              <ul>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
                <li>Guests with fever are not allowed.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Landingpage;
