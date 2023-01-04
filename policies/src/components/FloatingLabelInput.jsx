import { useState } from "react";

function FloatingLabelInput({ type, name, children, label }) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(null);

  function handleActivation(e) {
    setActive(!!e.target.value);
  }

  return (
    <div className="relative border rounded-full bg-slate-200 text-slate-900 border-white border-opacity-25">
      <input
        className={[
          "outline-none w-full rounded-full bg-transparent text-sm transition-all duration-200 ease-in-out  p-2",
          active ? "pl-28" : "",
        ].join(" ")}
        id={name}
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={handleActivation}
      />
      <label
        className={[
          "absolute top-0 left-0 flex rounded-full items-center text-opacity-50 p-2 transition-all duration-200 ease-in-out font-bold",
          active ? "text-xs" : "text-xs",
        ].join(" ")}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  );
}
export default FloatingLabelInput;
