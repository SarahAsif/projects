import logo from "./logo.svg";
import "./App.css";
import Date from "./components/Date";
import FloatingLabelInput from "./components/FloatingLabelInput";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

function App() {
  const handleChange = () => {
    console.log("hi");
  };
  let value;
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
        <div className="text-red-600 w-1/4 text-left p-5 bg-slate-200 h-screen text-2xl font-bold">
          J2 logo
        </div>
        <div className="uppercase w-full text-slate-800 p-3 space-y-3">
          <div className="font-bold">Policies motor Dashboard</div>
          <div className="grid grid-cols-4 gap-4 items-center">
            {/* <TextInput
              label={label}
              value={value}
              handleChange={handleChange}
              type={type}
  // */}
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
            <FloatingLabelInput name="username" type="text">
              Business Type
            </FloatingLabelInput>
            <FloatingLabelInput name="username" type="text">
              Registration No
            </FloatingLabelInput>
            <FloatingLabelInput name="username" type="text">
              Engine No
            </FloatingLabelInput>
            <FloatingLabelInput name="username" type="text">
              Chassis No
            </FloatingLabelInput>
            <Date name="issuedate" type="date" value={value} label={label}>
              Issue Date
            </Date>
            <Date name="expirydate" type="date" value={value} label={label}>
              Expiry Date
            </Date>
            <ColorButton variant="contained" className="h-10">
              Search for Policies
            </ColorButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
