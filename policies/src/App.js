import logo from "./images/logo.png";
import carback from "./images/carback.png";
import bell from "./images/bell.png";
import uphill from "./images/uphill.png";
import userlog from "./images/userlog.png";
import clock from "./images/clock.png";
import setting from "./images/setting.png";
import tick from "./images/tick.png";
import cash from "./images/cash.png";
import chart from "./images/chart.png";
import folder from "./images/folder.png";
import refresh from "./images/refresh.png";
import courier from "./images/courier.png";
import Add from "./images/add.png";
import logout from "./images/logout.png";
import Brief from "./images/briefcase.png";
import "./App.css";
import Date from "./components/Date";
import FloatingLabelInput from "./components/FloatingLabelInput";
import BasicSelect from "./components/BasicSelect";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
function App() {
  const myArray = [
    "Policy Number",
    "Product Name",
    "Business Type",
    "Policy Source",
    "Premium Payable",
    "Gross Premium",
    "Expiry Date",
    "Issue Date",
    "Insured Name",
  ];

  const ColorBut = styled(Button)({
    backgroundColor: "white",
    color: "#BA2322",
    fontWeight: "bold",
    fontSize: 12,

    "&:hover": {
      backgroundColor: "lightgrey",
    },
  });

  const handleChange = () => {
    console.log("hi");
  };
  const label = "Policy Number";
  const type = "text";
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[900],
    borderRadius: 19,

    "&:hover": {
      backgroundColor: red[700],
    },
  }));
  return (
    <div className="App">
      <div className="flex flex-row justify-around items-start gap-9">
        <div className="w-1/4 text-left">
          <div className="bg-slate-200">
            <img src={logo} className="w-24" />
          </div>
          <div className="bg-red-700 p-2 text-sm text-white space-y-3">
            <div>Policies</div>
            <hr />
            <ColorBut
              variant="contained"
              startIcon={<img src={Add} className="w-6" />}
            >
              Add a New Retail Policy
            </ColorBut>
            <ColorBut
              variant="contained"
              startIcon={<img src={Brief} className="w-6" />}
            >
              Add a New Corporate Policy
            </ColorBut>
          </div>
          <div className="bg-slate-200 text-base font-light space-y-2 p-5">
            <div className="flex gap-4">
              <img src={carback} className="w-6" />
              <span>Claims</span>
            </div>
            <div className="flex gap-4">
              <img src={setting} className="w-6" />
              <span>CAP</span>
            </div>
            <div className="flex gap-4">
              <img src={courier} className="w-6" />
              <span>Courier</span>
            </div>
            <div className="flex gap-4">
              <img src={bell} className="w-6" />
              <span>Notifications</span>
            </div>
            <div className="flex gap-4">
              <img src={uphill} className="w-6" />
              <span>Surveyor Dashboard</span>
            </div>
            <div className="flex gap-4">
              <img src={userlog} className="w-6" />
              <span>Users Logs</span>
            </div>
            <div className="flex gap-4">
              <img src={Brief} className="w-6" />
              <span>Finance & Accouting</span>
            </div>
            <div className="flex gap-4">
              <img src={clock} className="w-6" />
              <span>Callback</span>
            </div>
          </div>
          <div className="p-6 space-y-2 bg-slate-200 h-full">
            <div>Milad Raza</div>
            <div>Milad999</div>
            <div>tester@123.com</div>
            <div className="text-blue-500">Change Password</div>
            <div className="text-blue-500 flex">
              <img src={logout} className="w-6" />
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className="uppercase w-full text-slate-800 p-3 space-y-3">
          <div className="font-bold">Policies motor Dashboard</div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <FloatingLabelInput name="username" type="text">
              Policy Number
            </FloatingLabelInput>
            <FloatingLabelInput name="username" type="text">
              Gross Premium
            </FloatingLabelInput>
            <FloatingLabelInput name="username" type="text">
              Premium Rate
            </FloatingLabelInput>
            <FloatingLabelInput name="username" type="text">
              Net Premium
            </FloatingLabelInput>
            <BasicSelect name="username" type="text" label="Business Type" />
            <FloatingLabelInput name="username" type="text">
              Registration No
            </FloatingLabelInput>
            <FloatingLabelInput name="rname" type="text">
              Engine No
            </FloatingLabelInput>
            <FloatingLabelInput name="name" type="text">
              Chassis No
            </FloatingLabelInput>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-14">
              <Date name="issuedate" type="date" label="Issue Date" />
              <Date name="expirydate" type="date" label="Expiry Date" />
            </div>
            <div className="flex gap-20">
              <ColorButton variant="contained" className="h-10">
                Search for Policies
              </ColorButton>
              <img src={refresh} className="w-8" />
            </div>
          </div>
          <div className="flex justify-left gap-3">
            <ColorBut
              variant="contained"
              startIcon={<img src={folder} className="w-6" />}
            >
              Open
            </ColorBut>
            <ColorBut
              variant="contained"
              startIcon={<img src={chart} className="w-6" />}
            >
              Survey
            </ColorBut>
            <ColorBut
              variant="contained"
              startIcon={<img src={cash} className="w-6" />}
            >
              Awaiting payment
            </ColorBut>
            <ColorBut
              variant="contained"
              startIcon={<img src={courier} className="w-6" />}
            >
              Awaiting delivery
            </ColorBut>
            <ColorBut
              variant="contained"
              startIcon={<img src={clock} className="w-6" />}
            >
              Inactive
            </ColorBut>
            <ColorBut
              variant="contained"
              startIcon={<img src={tick} className="w-6" />}
            >
              Active Policies
            </ColorBut>
          </div>
          <div>
            <div class="relative overflow-x-auto">
              {myArray.map((name) => (
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3">
                        {name}
                      </th>
                      <th scope="col" class="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>{" "}
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
