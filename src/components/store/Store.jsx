import "./store.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";

import { Logo } from "../ImageImport";
const Store = ({ loginUser }) => {
  console.log(loginUser);
  return (
    <section className="container store">
      <aside>
        <div className="top">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo" />
            <h2>
              KY<span className="danger">N</span>
            </h2>
          </a>
          <div className="close" id="close-btn">
            <span className="material-icons-sharp">close</span>
          </div>
        </div>

        <div className="sidebar">
          <a href="#" className="active">
            <span className="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">inventory</span>
            <h3>Store</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">mail_outline</span>
            <h3>Messages</h3> <span className="message-count">23</span>
          </a>
          <a href="#">
            <span className="material-icons-sharp">report</span>
            <h3>Reports</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">settings</span>
            <h3>Settings</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">add</span>
            <h3>Add Store</h3>
          </a>
          <a href="#" className="active">
            <span className="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      {/* <!---------- END of Aside bar   ------------> */}

      <main>
        <h1>Store Info</h1>

        <div className="date">
          {/* <input type="date" /> */}
          Here you can check out the Store Information!
        </div>

        <div className="insights">
          <div className="sales">
            <span className="material-icons-sharp">analytics</span>
            <div className="middle">
              <div className="left">
                <h3>Total Store</h3>
                <h1>25,024</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 14 Hours</small>
          </div>
          {/* <!-------------------- End of Sales   -----------> */}

          <div className="expenses">
            <span className="material-icons-sharp">bar_chart</span>
            <div className="middle">
              <div className="left">
                <h3>Total Enage</h3>
                <h1>14,150</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>61%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 14 Hours</small>
          </div>
          {/* <!-------------------- End of Expenses   -----------> */}

          <div className="income">
            <span className="material-icons-sharp">stacked_line_chart</span>
            <div className="middle">
              <div className="left">
                <h3>Total People</h3>
                <h1>10,862</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>47%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 14 Hours</small>
          </div>
          {/* <!-------------------- End of Income   -----------> */}
        </div>
        {/* <!------------ End of Insights  -----------------> */}

        <div className="recent-orders">
          <h2>Recent Store</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{loginUser.name}</td>
                <td>{loginUser.email}</td>
                <td>Mandalay</td>
                <td>
                  <a className="warning" href="/store/edit">
                    Edit
                  </a>
                </td>
                <td>
                  <a className="primary" href="/store/delete">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <a href="#">Show All</a>
        </div>
      </main>
      {/* <!---------------------- End of Main -----------------> */}
      <div className="right">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>

          <div className="theme-toggler color" id="color">
            <span className="material-icons-sharp active color">
              invert_colors_off
            </span>
            <span className="material-icons-sharp active color-1">
              format_color_fill
            </span>
          </div>

          <div id="toggler" className="theme-toggler">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
          </div>
          <div className="profile">
            {/* ----------------------------------
                ----------------
                -----
                IN Here I will have to insert data from sever 
             
            */}
            <div className="info">
              <p>
                Hey, <b>{loginUser.name}</b>
              </p>
              {/* <small className="text-muted">Admin</small> */}
            </div>
            <div className="profile-photo">
              {/* <img
                src={`https://graph.facebook.com/${loginUser.picture}/picture`}
                alt="profile-image"
              /> */}
              {/* <img src={Image1} alt="image" /> */}
              <img src={loginUser.picutre} alt="" />
            </div>
          </div>
          {/* -----
              ----------------
              ---------------------------------- */}
        </div>
        {/* <!-- end of Top --> */}

        <div className="recent-updates">
          <h2>Recent Updates</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img src={Image1} />
              </div>
              <div className="message">
                <p>
                  <b>Rayy</b> received his order of Night lion tech GPS drone.
                </p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>

            <div className="update">
              <div className="profile-photo">
                <img src={Image3} />
              </div>
              <div className="message">
                <p>
                  <b>Rayy</b> received his order of Night lion tech GPS drone.
                </p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>

            <div className="update">
              <div className="profile-photo">
                <img src={Image4} />
              </div>
              <div className="message">
                <p>
                  <b>Rayy</b> received his order of Night lion tech GPS drone.
                </p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>
          </div>
        </div>
        {/* <!--------------------  End of Recent Update --------------------> */}
      </div>
    </section>
  );
  {
  }
};

export default Store;
