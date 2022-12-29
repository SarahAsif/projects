import { useState } from "react";

function FloatingLabelInput({ type, name, children }) {
  const [active, setActive] = useState(false);

  function handleActivation(e) {
    setActive(!!e.target.value);
  }

  return (
    <div className="relative border rounded bg-slate-200 text-slate-900 border-white border-opacity-25">
      <input
        className={[
          "outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out  p-2",
          active ? "pl-28" : "",
        ].join(" ")}
        id={name}
        name={name}
        type={type}
        onChange={handleActivation}
      />
      <label
        className={[
          "absolute top-0 left-0 flex items-center text-opacity-50 p-2 transition-all duration-200 ease-in-out font-bold",
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
