import "./store.css";

import { Logo } from "../ImageImport";
import { useEffect, useState } from "react";
const Store = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/store")
      .then((res) => res.json())
      .then((data) => {
        setStoreData(data);
      });
  }, []);

  useEffect(() => {
    const sideMenu = document?.querySelector("aside");
    const menuBtn = document?.querySelector("#menu-btn");
    const closeBtn = document?.querySelector("#close-btn");
    const themeToggler = document?.querySelector("#toggler");
    // const store = document?.querySelector(".store");

    // Color theme
    const themeTogglerColor = document?.querySelector("#color");

    const toggleBlueTheme = () => {
      document.body.classList.toggle("blue-theme-variable");

      themeTogglerColor
        .querySelector("span:nth-child(1)")
        .classList.toggle("set");
      themeTogglerColor
        .querySelector("span:nth-child(2)")
        .classList.toggle("set-1");
    };

    const showSidebar = () => {
      sideMenu.style.display = "block";
    };

    const closeSidebar = () => {
      sideMenu.style.display = "none";
    };

    const toggleDarkTheme = () => {
      document.body.classList.toggle("dark-theme-variables");
      themeToggler
        .querySelector("span:nth-child(1)")
        .classList.toggle("active");
      themeToggler
        .querySelector("span:nth-child(2)")
        .classList.toggle("active");
    };

    themeTogglerColor.addEventListener("click", toggleBlueTheme);
    menuBtn.addEventListener("click", showSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    themeToggler.addEventListener("click", toggleDarkTheme);

    // Clean up event listeners when the component unmounts
    return () => {
      themeTogglerColor.removeEventListener("click", toggleBlueTheme);
      menuBtn.removeEventListener("click", showSidebar);
      closeBtn.removeEventListener("click", closeSidebar);
      themeToggler.removeEventListener("click", toggleDarkTheme);
    };
  }, []);

  const storeLists = storeData?.map((store, index) => {
    return (
      <tr key={index}>
        <td>{store.name}</td>
        <td>{store.email}</td>
        <td>Mandalay</td>
        <td>{store.userType}</td>
        <td>
          <a
            style={{ fontSize: "15px" }}
            className="warning"
            href="/store/edit"
          >
            Edit
          </a>
        </td>
        <td>
          <a
            style={{ fontSize: "15px", color: "var(--color-danger)" }}
            className="primary"
            href="/store/delete"
          >
            Delete
          </a>
        </td>
      </tr>
    );
  });

  const updateLists = storeData?.map((store, index) => {
    return (
      <div key={index} className="update">
        <div className="profile-photo">
          {store?.userType == "Facebook" ? (
            <img
              src={`http://graph.facebook.com/${store?.userID}/picture`}
              alt="Facebook Profile"
            />
          ) : (
            <img src={store?.picture} alt="Google Profile" />
          )}
        </div>
        <div className="message">
          <p>
            <b>{store?.name}</b> has registered in KYN App.
          </p>
          <small className="text-muted">2 Minutes Ago</small>
        </div>
      </div>
    );
  });

  return (
    <section className="container store">
      <aside>
        <div className="top">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo" />
            <h2>
              KY<span className="primary">N</span>
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
                <th>User Type</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{storeLists}</tbody>
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
            <div className="info">
              <p>
                Hey, <b>{storeData[storeData.length - 1]?.name}</b>
              </p>
              {/* <small className="text-muted">Admin</small> */}
            </div>
            <div className="profile-photo">
              {storeData[storeData.length - 1]?.userType == "Facebook" ? (
                <img
                  src={`http://graph.facebook.com/${
                    storeData[storeData.length - 1]?.userID
                  }/picture`}
                  alt="Facebook Profile"
                />
              ) : (
                <img
                  src={storeData[storeData.length - 1]?.picture}
                  alt="Google Profile"
                />
              )}
            </div>
          </div>
        </div>
        {/* <!-- end of Top --> */}

        <div className="recent-updates">
          <h2>Recent Updates</h2>
          <div className="updates">{updateLists}</div>
        </div>
        {/* <!--------------------  End of Recent Update --------------------> */}
      </div>
    </section>
  );
  {
  }
};

export default Store;
